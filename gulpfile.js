'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');



gulp.task('serve', function() {
  browserSync.init({
    proxy: "finique.com",
    files: ["./user/themes/finique/templates/**/*.twig","./user/themes/finique/images/**/*.*" ]
  });
  gulp.watch('./user/themes/finique/scss/**/*.scss', ['dev-sass']);
});


gulp.task('dev-sass', function () {
  gulp.src('./user/themes/finique/scss/*.scss')
  // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false,
      remove: false
    }))
    .pipe(minify({compatibility: 'ie8'}))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./user/themes/finique/css'))
    .pipe(browserSync.stream());
});
gulp.task('prod-sass', function () {
  gulp.src('./user/themes/finique/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false,
      remove: false
    }))
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(gulp.dest('./user/themes/finique/css'))
});

gulp.task('images', function () {
  gulp.src('./user/pages/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./user/pages/'))
});

gulp.task('watch', function () {
  gulp.watch('./user/themes/finique/scss/**/*.scss', ['dev-sass']);
});
