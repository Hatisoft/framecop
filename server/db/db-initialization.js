var Waterline = require('waterline');
var config = require('./db-config.js');
var Framework = require('./framework-model.js');
var waterline = new Waterline();

waterline.loadCollection(Framework);

function dbInitialize(app){
    waterline.initialize(config, function(err, models) {
      if(err)
        throw err;

      app.models = models.collections;
      app.connections = models.connections;

      app.models.framework.create({ name: 'vue.js', language: 'javascript' }).then(console.log).catch(console.error);
      app.models.framework.create({ name: 'react', language: 'javascript' }).then(console.log).catch(console.error);
      app.models.framework.create({ name: 'angular', language: 'javascript' }).then(console.log).catch(console.error);
      app.models.framework.create({ name: 'boost', language: 'c++' }).then(console.log).catch(console.error);
    });
}

module.exports = dbInitialize;
