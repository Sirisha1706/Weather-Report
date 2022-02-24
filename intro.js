var http = require('http');
var os = require('os');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('Hello Everyone');
    console.log(os.totalmem());
    console.log(os.freemem());
    console.log(os.type());
    console.log(os.platform());
}).listen(8080);