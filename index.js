let http = require('http');
let server = http.createServer()

const port = 8082;

console.log('Starting Node.js echo server on port ' + port)
server.on('request', function(request, response){
 request.pipe(response);
}).on('close', function(){
    console.log('The Node.js echo server has been closed.')
    server.close();
})
.listen(port);

console.log('Node.js echo server started on port ' + port)


// const http = require('http');
// const server = http.createServer();

// server.on('request', (request, response) => {
//     let body = [];
//     request.on('data', (chunk) => {
//         body.push(chunk);
//     }).on('end', () => {
//         body = Buffer.concat(body).toString();

// 	console.log(`==== ${request.method} ${request.url}`);
// 	console.log('> Headers');
//         console.log(request.headers);

// 	console.log('> Body');
// 	console.log(body);
//         response.end();
//     });
// }).listen(8082);

module.exports = server;