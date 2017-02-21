var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello World</h1>");
  response.write("<p>Hello Node.js</p>");
  response.end();
}).listen(8888);