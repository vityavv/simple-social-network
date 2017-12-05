var http = require("http");
var url = require("url");
var fs = require("fs");

function serverfunc(req, res) {
	var query = url.parse(req.url, true);
	if (query.pathname == "/front.html" || query.pathname == "/") {
		fs.readFile("./front.html", function(error, data) {
			if (error) {
				res.writeHead(404, "404 not found", {"Content-Type": "text/html"});
				return res.end("404 Not Found");
			}
			res.write(data);
			res.end();
		});
	}
	if (query.pathname == "/front.js") {
		fs.readFile("./front.js", function(error, data) {
			if (error) {
				res.writeHead(404, "404 not found", {"Content-Type": "text/html"});
				return res.end("404 Not Found");
			}
			res.write(data);
			res.end();
		});
	}
	console.log(query.pathname);
}

http.createServer(serverfunc).listen(8080);

/*
 * JS CODE:
 fetch("http://localhost:8080", {method: "post", body: "hello"}).then(function(r){return r.text()}).then(function(r){console.log(r)});
 * This means: fetch the localhost with the post method, and post "hello"
 */
