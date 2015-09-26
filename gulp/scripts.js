/*jslint node: true */

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
        path.join(conf.paths.src, './ts/*.ts'),
        path.join(conf.paths.tmp, 'typings/tsd.d.ts')
      ])
    .pipe($.tslint())
    .pipe($.tslint.report('prose', {
      emitError: false
    }))
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject)).on('error', conf.errorHandler(
      'TypeScript'))
    .pipe($.sourcemaps.write({
      sourceRoot: './ts'
    }))
    .pipe(gulp.dest('./src/'));
});

gulp.task('scripts', ['typescript'], function() {});
