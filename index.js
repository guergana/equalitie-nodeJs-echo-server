let http = require('http');

const port = 8082;

console.log('Starting Node.js echo server on port ' + port)
http.createServer().on('request', function(request, response){
 request.pipe(response);
}).on('close', function(){
    console.log('The Node.js echo server has been closed.')
})
.listen(port);

console.log('Node.js echo server started on port ' + port)