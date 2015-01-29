var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade');
    uglify = require('gulp-uglify');

var path  = require('path');


gulp.task('dev', ['stylus','js','jade'], function() { });
/**
 *  Stylus task
 * */
gulp.task('stylus', function () {
    gulp.src(['./components/**/*.styl'])
        .pipe(stylus())
        .on('error', console.log)
        .pipe(rename(function(path){
            path.dirname = path.dirname.replace('src','');
        }))
        .pipe(gulp.dest('./components/'))
});
/**
 * Jade task
 */
gulp.task('jade', function() {
    gulp.src(['./components/**/*.jade'])
        .pipe(jade({}))
        .pipe(rename(function(path){
            path.dirname = path.dirname.replace('src','');
        }))
        .pipe(gulp.dest('./components/'))
});
/**
 * JS Task
 */
gulp.task('js', function () {
    gulp.src(['./components/x-tips-overlay/**/*.js'])
        .pipe(uglify())
        .pipe(rename(function(path){
            path.dirname = path.dirname.replace('src','');
        }))
        .pipe(gulp.dest('./components/x-tips-overlay/'));
});
/**
 *  Watcher
 * */
gulp.task('watch', function() {
    // Watch less files
    gulp.watch(['./components/**/*.styl'],[
        'stylus'
    ]);
    // Watch jade files
    gulp.watch(['./components/**/*.jade'],[
        'jade'
    ]);
    // Watch js files
    gulp.watch(['./components/x-tips-overlay/**/*.js'],[
        'js'
    ]);
});

gulp.task('default', ['dev','watch']);