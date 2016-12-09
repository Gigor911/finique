'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();



gulp.task('serve', function() {
  browserSync.init({
    proxy: "finique.com",
    files: ["./user/themes/antimatter/templates/**/*.twig","./user/themes/antimatter/images/**/*.*" ]
  });
  gulp.watch('./user/themes/antimatter/scss/**/*.scss', ['dev-sass']);
});


gulp.task('dev-sass', function () {
  gulp.src(['./user/themes/antimatter/scss/nucleus.scss', './user/themes/antimatter/scss/particles.scss', './user/themes/antimatter/scss/template.scss'])
  // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false,
      remove: false
    }))
    .pipe(minify({compatibility: 'ie8'}))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./user/themes/antimatter/css-compiled'))
    .pipe(browserSync.stream());
});
gulp.task('prod-sass', function () {
  gulp.src('./user/themes/antimatter/scss/custom.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false,
      remove: false
    }))
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(gulp.dest('./user/themes/antimatter/css-compiled'))
});
gulp.task('watch', function () {
  gulp.watch('./user/themes/antimatter/scss/**/*.scss', ['dev-sass']);
});
