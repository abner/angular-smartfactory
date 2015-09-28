'use strict';


module.exports = function(config) {

  var configuration = {
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/rosie/src/rosie.js',
      './node_modules/faker/build/build/faker.js',
      'src/smartFactory.js',
      'src/smartFactoryConfig.js',
      'src/smartFactory.spec.js'
    ],

    singleRun: true,

    autoWatch: false,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-notify-reporter'
    ],


    preprocessors: {
      'src/*[!spec].js': ['coverage']
    },

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
