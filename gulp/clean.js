'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del']
});

gulp.task('clean', ['tsd:purge'], function (done) {
  //gulp.src([path.join(conf.paths.src, '/*.js'), path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')])
  //.pipe($.del())
  //.pipe(done());
  //;
  $.del([path.join(conf.paths.src, '/*.js'), path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')], done);
});
