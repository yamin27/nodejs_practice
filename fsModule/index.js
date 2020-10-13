var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req,res){

    if (req.url == "/"){



        // fs.writeFile('demo.txt', 'file write', function (error){

        //sync rename
        let error = fs.renameSync('Demo2.txt', 'demo_two.txt');

            if (error){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Rename Fail");
                res.end();
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Rename Successfully");
                res.end();

            }

        // let error = fs.writeFileSync('Demo2.txt', 'Sync FIle Write Example');



        // });


        //async read
        // fs.readFile('index.html', function (error, data){
        //
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        //
        // })

        //sync read
        // let myData = fs.readFileSync('index.html');
        //
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(myData);
        //     res.end();

    }

})

server.listen(4040)
console.log("fs server running successfully")