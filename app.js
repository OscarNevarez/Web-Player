
/**
 * Module dependencies.
 */

var express = require('express')
var app = express()

app.get('/watch', function (req, res) {
	var options = { 
		root:__dirname + '/routes/',
	}
	res.set('Content-Type', 'text/html');
	res.sendFile('home.html', options);
})

app.listen(3000, function () {
	console.log("Server is running!")
})