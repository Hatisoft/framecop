var Waterline = require('waterline');

var Framework = Waterline.Collection.extend({
  identity: 'framework',
  connection: 'default',
  attributes: {
    name: 'string',
    language: 'string'
  }
});

module.exports = Framework;
