var express = require('express');
var path = require('path');
var app = express();

var isDevMode = process.argv.includes('--dev');
app.use(express.static('www'));
if(isDevMode)
    require('./webpack-load')(app);

app.get('/', function (req, res) {
//    res.sendFile(__dirname + '/../client/index.html');
    res.send('<body>Hello World<script src=\'index.js\'></script></body>');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
