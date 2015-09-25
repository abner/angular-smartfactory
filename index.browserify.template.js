var faker = require('./node_modules/faker/index');
var Factory = require('rosie').Factory;

var smartFactory = require('./src/factories.js');
smartFactory.faker = faker;
smartFactory.Factory = Factory;
