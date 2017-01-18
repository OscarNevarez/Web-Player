
/**
 * Module dependencies.
 */

var express = require("express");
const url = require("url");
var fs = require("fs");
var http = require("http");
var path = require("path");
var app = express();
app.use(express.static('assets'));

app.get('/watch', function (req, res) {
	var options = { 
		root:__dirname + '/routes/',
	}
	res.set('Content-Type', 'text/html');
	res.sendFile('home.html', options);
})

app.listen(3000, function () {
	console.log("Server is running!");
})