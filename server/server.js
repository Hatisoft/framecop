var express = require('express');
var path = require('path');
var app = express();

var Waterline = require('waterline');
var sailsMemoryAdapter = require('sails-memory');
var waterline = new Waterline();


var framework = require('./API/framework.js');

var isDevMode = process.argv.includes('--dev');

if(isDevMode)
    require('./webpack-load')(app);

app.use('/api/framework', framework);

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

var config = {
  adapters: {
    'memory': sailsMemoryAdapter
  },
    connections: {
        default: {
            adapter: 'memory'
        }
    }
};

var Framework = Waterline.Collection.extend({

  identity: 'framework',
  connection: 'default',
  attributes: {
    name: 'string'
  }
});

waterline.loadCollection(Framework);

waterline.initialize(config, function(err, models) {
  if(err)
    throw err;

  app.models = models.collections;
  app.connections = models.connections;

  app.models.framework.create({ name: 'javascript' }).then(console.log).catch(console.error);

  // Start Server
  app.listen(3000);

  console.log("Example app listening at http://localhost:3000");
});
