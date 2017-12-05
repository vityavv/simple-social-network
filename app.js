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
			res.end(data);
		});
	} else if (query.pathname == "/front.js") {
		fs.readFile("./front.js", function(error, data) {
			if (error) {
				res.writeHead(404, "404 not found", {"Content-Type": "text/html"});
				return res.end("404 Not Found");
			}
			res.end(data);
		});
	} else if (query.pathname == "/data.json") {
		if (req.method == "GET") {
			fs.readFile("./data.json", function(error, data) {
				if (error) {
					res.writeHead(404, "404 not found", {"Content-Type": "text/html"});
					return res.end("404 Not Found");
				}
				res.end(data);
			});
		} else if (req.method == "POST") {
			var requestBody = "";
			req.on("data", function(data) {
				requestBody += data;
				if (requestBody.length > 1e7) {
					res.writeHead(413, "Request Entity Too Large", {"Content-Type": "text/html"});
					res.end("Request Entity Too Large, Bitch");
				}
			});
			req.on("end", function() {
				//TODO: Write API. requestBody is the data recieved.
			});
		}
	}
}

http.createServer(serverfunc).listen(8080);
