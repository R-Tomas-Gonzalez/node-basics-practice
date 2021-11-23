//importing http module
const http = require('http');

//importing routes from route file
const routes = require('./routes');

//creating a server using the http module
//using the routes to show content from the routes
const server = http.createServer(routes);

//keeping the server open with listen function on port 3000
server.listen(3000);