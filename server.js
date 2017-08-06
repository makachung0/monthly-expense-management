var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var express = require("express");
var google = require('googleapis');
var urlshortener = google.urlshortener('v1');

var params = {
  shortUrl: 'http://goo.gl/xKbRu3'
};

// get the long url of a shortened url
urlshortener.url.get(params, function (err, response) {
  if (err) {
    console.log('Encountered error', err);
  } else {
    console.log('Long url is', response.longUrl);
  }
});

// var app = express();
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res){
//     res.send("working")
// })

// //create server on port 3000
// app.server = http.createServer(app);
// app.server.listen(3000);
// console.log("Starting Server at Localhost:3000");