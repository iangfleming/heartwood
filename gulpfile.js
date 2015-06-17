// Gulp tasks for Heartwood tests
// npm install gulp
// npm install --save-dev gulp-sass gulp-ruby-haml gulp-rename
// $ gulp
// boom!
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    haml = require('gulp-ruby-haml'),
    rename = require('gulp-rename')


gulp.task('sass', function(){
  return gulp.src('./tests/input.scss')
    .pipe(sass())
    .pipe(rename('output.css'))
    .pipe(gulp.dest('./tests/'))
});

gulp.task('haml', function(){
  return gulp.src('./tests/input.haml')
    .pipe(haml())
    .pipe(rename('output.html'))
    .pipe(gulp.dest('./tests/'))
});

gulp.task('default', ['sass', 'haml'], function(){
  gulp.start('sass');
  gulp.start('haml');
  gulp.watch('./tests/*.scss', ['sass'])
  gulp.watch('./tests/*.haml', ['haml'])
});
