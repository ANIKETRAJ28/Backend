const http = require("http");
/**
 * HTTP module contains a function called as createServer()
 * this createServer() function takes a callback as the input
 * Now inside the callback, we get two arguments
 *  - request -> this argument contains all the details about the incoming request
 *  - response -> this argument contains functions using which we can prepare the response
 * 
 * the createServer() function returns is the server object
 */
const PORT = 3000;
const server = http.createServer(function exec(request, response){
    console.log(request.method);
    response.end("hello world")
});
server.listen(PORT, function process(){
    // once the server has started then this callback will be executed
    console.log("Server started on port", PORT);
});