const http = require('http');
const cluster = require('cluster');
const numCpus = require('os').cpus().length;


if(cluster.isMaster){
  console.log('master process', process.pid);
  for(let i=0;i<numCpus;i++){
      cluster.fork();
  }
  cluster.on('exit', worker=>{
    console.log(`Worker process: ${process.pid} died`);
    console.log(`only ${Object.keys(cluster.workers).length} remaining`);
    console.log('starting new worker');
    cluster.fork();
  })
}else{
  console.log(`started worker at process: ${process.pid}`);
  http.createServer((req,res)=>{
    res.end(`process: ${process.pid}`);
    if(req.url==='/kill'){
      process.exit();
    }else if(req.url==='/'){
      console.log(`serving from ${process.pid}`);
    }
  }).listen(3000);
}
