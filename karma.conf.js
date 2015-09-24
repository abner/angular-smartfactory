'use strict';

var path = require('path');
var conf = require('./gulp/conf');

module.exports = function(config) {

  var configuration = {
    files: [
      'bower_components/faker/build/build/faker.js',
      'bower_components/rosie/src/rosie.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jasmine-expect/dist/jasmine-matchers.js',
      'src/factories.js',
      'src/configDecorator.js',
      'src/factories.spec.js'
    ],

    singleRun: true,

    autoWatch: false,

    frameworks: ['jasmine', 'jasmine-matchers'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-ng-html2js-preprocessor',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-notify-reporter'
    ],

    reporters: ['spec', 'notify', 'coverage'],

    notifyReporter: {
      reportEachFailure: true, // Default: false, Will notify on every failed sepc
      reportSuccess: true // Default: true, Will notify when a suite was successful
    },

    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: 'coverage'
      }, {
        type: 'json',
        dir: 'coverage'
      }]
    }



  };

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if (configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};
