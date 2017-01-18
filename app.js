
/**
 * Module dependencies.
 */

var express = require("express");
const url = require("url");
var fs = require("fs");
var http = require("http");
var path = require("path");
var app = express();

app.get('/watch', function (req, res) {
	var options = { 
		root:__dirname + '/routes/',
	}
	res.set('Content-Type', 'text/html');
	res.sendFile('home.html', options);
})

app.get('/s4', function(req, res){
	var file = path.join(__dirname, "/assets/scream4.mp4");
	console.log(__dirname);
	var range = req.headers.range;
	if(!range) {
		return res.sendStatus(416);
	}
	var positions = range.replace(/bytes=/, "").split("-");
	var start = parseInt(positions[0], 10);
	var total = stats.size;
	var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
	var chunksize = (end - start) + 1 
	
	res.writeHead(206, {
		"Content-Range": "bytes " + start + "-" + end + "/" + total,
		"Accept-Ranges": "bytes",
		"Content-Length": chunksize,
		"Content-Type": "video/mp4"
	})
	
	var stream =fs.createReadStream(file, { start: start, end: end })
		.on("open", function(){
			stream.pipe(res);
		}).on("error", function(err){
			res.end(err);
		});
})

app.listen(3000, function () {
	console.log("Server is running!");
})