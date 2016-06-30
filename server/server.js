var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var framework = require('./api/framework.js');
var dbInitialization = require('./db/db-initialization.js');

var isDevMode = process.argv.includes('--dev');

dbInitialization(app);

if(isDevMode)
    require('./webpack-load')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/framework', framework);

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.listen(3000);
