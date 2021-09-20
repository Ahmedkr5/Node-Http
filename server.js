const http=require ('http');


var server =http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end('<html><body><h1>ceci est ma reponse du serveur!</h1></body></html>');
}

);

server.listen(8080);