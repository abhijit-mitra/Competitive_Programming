const http = require('http');
const cluster = require('cluster');
const numCpus = require('os').cpus().length;


if(cluster.isMaster){
  console.log('master process', process.pid);
  for(let i=0;i<numCpus;i++){
      cluster.fork();
  }
}else{
  http.createServer((req,res)=>{
    const msg = `Worker: ${process.pid}`;
    res.end(msg);
  }).listen(3000);
}
