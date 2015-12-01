var gulp = require('gulp');
var clean = require('gulp-clean');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');

gulp.task('clean', function() {
    return gulp.src('public/css')
        .pipe(clean({
            force: true
        }))
});

gulp.task('less-watch', function() {
    return gulp.src('public/less/demo.less')
        .pipe(watchLess('public/less/demo.less', function() {
            gulp.start('less');
        }))
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('less', ['clean'], function() {
    return gulp.src('public/less/demo.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['less']);

gulp.task('watch', ['less-watch'])
