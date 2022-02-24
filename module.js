var http = require('http');
var time = require('./ownmodule');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('The Date And Time For Now Is: ' + time.mytime());
    res.write(time.myname());
    res.end();
}).listen(8000)