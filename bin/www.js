var http = require("http");
var app = require("../app.js");
var server = http.createServer(app);

const config = require('config-lite')(__dirname);

server.listen(config.server.port).on("listening",function(){
	console.log(`Server running at http://${config.server.host}:${config.server.port}`);
	console.log('进程id', process.pid)
})
