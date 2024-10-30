let http = require('http');
let server = http.createServer()

const port = 8082;

const app = server.listen(port, () => {
    console.log('Node.js echo server started on port ' + port)
})

console.log('Starting Node.js echo server on port ' + port)
server.on('request', function(request, response){
    request.pipe(response);
});

server.on('close', function(){
    console.log('closing server')
})

module.exports = {server, app};