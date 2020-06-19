const http = require('http');

http.createServer((req, res)=>{
  const payload=JSON.stringify({
    processId:process.pid
  });
  res.writeHead(200,{'Content-Type':'application/json'});
  res.end(payload);

}).listen(3000);

//command: pm2 start ./3_pm2.js -i -1 will craete clustors on the basis of number of cpus available
