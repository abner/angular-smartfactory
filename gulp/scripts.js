'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var fs = require('fs');

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
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject)).on('error', conf.errorHandler(
      'TypeScript'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./src/'));
});

gulp.task('browserify', ['typescript'], function() {
  return gulp.src('./index.browserify.template.js', {
      read: false
    })
    .pipe($.browserify())
    .pipe($.sourcemaps.init())
    .pipe($.rename('smartFactory.js'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.rename('smartFactory.min.js'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./dist'));

});


gulp.task('scripts', ['browserify'], function() {});
