'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var tsProject = $.typescript.createProject('./tsconfig.json');

gulp.task('transpile', [], function() {
  return gulp.src(
      [
        path.join(conf.paths.src, './ts/*.ts')
      ])
    .pipe($.tslint())
    .pipe($.tslint.report('prose', {
      emitError: false
    }))
    .pipe($.typescript(tsProject)).on('error', conf.errorHandler(
      'TypeScript'))
    .pipe(gulp.dest('./src/'));
});


gulp.task('scripts', ['tsd:install', 'transpile'], function() {});
