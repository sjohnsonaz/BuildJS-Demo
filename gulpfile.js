var gulp = require('gulp');
var clean = require('gulp-clean');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');

gulp.task('clean', function() {
    return gulp.src('public/css')
        .pipe(clean({
            force: true
        }))
});

gulp.task('minify-css', ['less'], function() {
    return gulp.src('public/css/*.css')
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('less-watch', ['less'], function() {
    return gulp.src('public/less/demo.less')
        .pipe(watchLess('public/less/demo.less', function() {
            gulp.start('less');
        }));
});

gulp.task('less', function() {
    return gulp.src('public/less/demo.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('minify-watch', ['minify-css'], function() {
    return gulp.src('public/less/demo.less')
        .pipe(watchLess('public/less/demo.less', function() {
            gulp.start('minify-css');
        }));
});

gulp.task('default', ['less']);

gulp.task('watch', ['less-watch'])
