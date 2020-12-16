const http = require('http');

var server = http.createServer((req,res)=>{
    res.write('<h1>Hi From Node Js</h1>');
    res.end();
});

server.listen(8990);