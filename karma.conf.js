'use strict';

var istanbul = require("browserify-istanbul");

module.exports = function(config) {

  var configuration = {
    files: [
      'src/factories.js',
      'src/factories.spec.js'
    ],

    singleRun: true,

    autoWatch: false,

    frameworks: ['jasmine', 'browserify'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-notify-reporter',
      'karma-browserify'
    ],

    /*
    commonjsPreprocessor: {
      modulesRoot: 'src'
    },
    */
    browserify: {
      transform: [
        [
          istanbul({
          ignore: ["node_modules/**", "**/*.spec.js"],
          includeUntested: false,
          defaultIgnore: true
          }),
          { global: true }
        ]
      ]
    },

// **** USING BROWSERIFY TOGETHER WITH COVERAGE AS PREPROCESSOR WAS RETURNING ERROR ***
    //preprocessors: {
    //  'src/*.js': ['browserify', 'coverage']
    //},
    preprocessors: {
      'src/*.js': ['browserify']
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
