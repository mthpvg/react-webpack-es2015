var TARGET = process.env.npm_lifecycle_event;
var common = require('./common.js');
var prod = require('./prod');
var dev = require('./dev');
var merge = require('webpack-merge');

switch (TARGET) {
  case 'build':
    module.exports = merge(common, prod);
    break;
  case 'start':
    module.exports = merge(common, dev);
    break;
}