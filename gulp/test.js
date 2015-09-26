'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');


function runTests(singleRun, done) {
  var karmaServer = new karma.Server({
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun
  }, function(exitCode) {
    done();
    process.exit(exitCode);
  });

  karmaServer.on('run_complete', function(browser) {
    console.log("REMAPING...");
    gulp.src('coverage/PhantomJS 1.9.8 (Linux 0.0.0)/coverage-final.json')
      .pipe(remapIstanbul({
        reports: {
          'json': 'coverage/remaped/coverage.json',
          'html': 'coverage/remaped/'
        }
      }));

  });

  karmaServer.start();

}

gulp.task('test', ['scripts'], function(done) {
  runTests(true, done);
});

gulp.task('retest', [], function(done) {
  runTests(true, done);
});

gulp.task('test:auto', ['scripts', 'watch'], function(done) {
  runTests(false, done);
});
