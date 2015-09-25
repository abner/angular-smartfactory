'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();


var tsProject = $.typescript.createProject('./tsconfig.json');

gulp.task('typescript', [], function() {
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

gulp.task('browserify', ['typescript'], function() {
  return gulp.src('./index.browserify.template.js', {
      read: false
    })
    .pipe($.browserify())
    .pipe($.rename('smartFactory.js'))
    .pipe(gulp.dest('./dist'))
    .pipe($.uglify())
    .pipe($.rename('smartFactory.min.js'))
    .pipe(gulp.dest('./dist'));

});


gulp.task('scripts', ['browserify'], function() {});
