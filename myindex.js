var http=require('http');
var mydt=require('./mymodule');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("The date and time is "+mydt.mydate());
    res.end("Thank you for visiting");
}).listen(8080);