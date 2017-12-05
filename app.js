var http = require("http");
var url = require("url");
var fs = require("fs");

var passWebpageURLS = ["./index.html", "./index.js"];
function readAndWriteFile(filePath, type, res) {
	fs.readFile(filePath, function(err, data) {
		if (err) {
			res.writeHead(404, {"Content-Type": "text/html"});
			console.log("err");
			return res.write("404 Not Found");
		} else {
			if (type) {
				res.writeHead(200, {"Content-Type": type});
			}
			res.write(data);
		}
	});
}
function serverfunc(req, res) {
	var query = url.parse(req.url, true);
	if (query.pathname == "/index.html" || "/") {
		readAndWriteFile("./index.html", "text/html", res);
	}
	if (query.pathname == "/index.js") {
		readAndWriteFile("./index.js", null, res);
	}
	console.log(query.pathname);
}

http.createServer(serverfunc).listen(8080);

/*
 * JS CODE:
 fetch("http://localhost:8080", {method: "post", body: "hello"}).then(function(r){return r.text()}).then(function(r){console.log(r)});
 * This means: fetch the localhost with the post method, and post "hello"
 */
