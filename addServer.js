var http = require('http')
var url = require("url")

var port = 8080




const server = http.createServer(function (request, response) {
    if (request.method === 'GET') {
        const queryObject = url.parse(request.url,true).query;
        
         
        let result = Number(queryObject.number1) + parseInt(queryObject.number2)
        
        
        const body = `<h1 style="font-size:1000px">${result.toString()}</h1>`
        

        response.writeHead(200, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/html'
        })
        .end(body);

    }
})

server.listen(port, function () {
  console.log('Server listening')
})



