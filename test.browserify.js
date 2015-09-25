var faker = require('./node_modules/faker/index');
var Factory = require('rosie').Factory;
var angular = require('angular');
require('angular-mocks');

var smartFactory = require('./src/factories.js');
smartFactory.faker = faker;
smartFactory.Factory = Factory;
smartFactory.angular = angular;
