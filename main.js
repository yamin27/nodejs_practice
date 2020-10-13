var http = require('http');

var server = http.createServer(function (req, res){

    // res.end('Hello world')

    if (req.url == "/"){

        res.writeHead(200, {'Context-Type': 'text-html'})
        res.write('<h1>This is Home page </h1>')
        res.end();

    }
    else if (req.url == "/about"){

        res.writeHead(200, {'Context-Type': 'text-html'})
        res.write('<h1>This is about page </h1>')
        res.end();

    }
    else if(req.url == "/contact"){

        res.writeHead(200, {'Context-Type': 'text-html'})
        res.write('<h1>This is contact page</h1>')
        res.end();

    }

});

server.listen(5050);
console.log("Server is running now");