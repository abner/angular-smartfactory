'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

function runTests(singleRun, done) {
  karma.server.start({
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun
  }, function() {
    done();
  });
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


gulp.task('cov', ['test'], function(){
  //var remapIstanbul = require('remap-istanbul');
  //remapIstanbul('coverage/PhantomJS 1.9.8 (Linux 0.0.0)/coverage-final.json', {
  //    'json': 'coverage-ts.json'
  //});
  var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
 
   gulp.src('coverage/PhantomJS 1.9.8 (Linux 0.0.0)/coverage-final.json')
        .pipe(remapIstanbul({
            reports: {
                'json': 'coverage/remaped/coverage.json',
                'html': 'coverage/remaped/'
            }
        }))
        .pipe(gulp.src('src/ts', { read: false}));
});

