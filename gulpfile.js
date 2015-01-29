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
    gulp.src(['./develop/x-tips-overlay/src/*.styl','./develop/x-tips-overlay/vars.styl'])
        .pipe(stylus())
        .on('error', console.log)
        .pipe(rename(function(path){
            path.dirname = path.dirname.replace('src','');
        }))
        .pipe(gulp.dest('./develop/x-tips-overlay'))
});
/**
 * Jade task
 */
gulp.task('jade', function() {
    gulp.src(['./develop/x-tips-overlay/src/*.jade'])
        .pipe(jade({}))
        .pipe(rename(function(path){
            path.dirname = path.dirname.replace('src','');
        }))
        .pipe(gulp.dest('./develop/x-tips-overlay'))
});
/**
 * JS Task
 */
gulp.task('js', function () {
    gulp.src(['./develop/x-tips-overlay/src/*.js'])
        .pipe(uglify())
        .pipe(rename(function(path){
            path.dirname = path.dirname.replace('src','');
        }))
        .pipe(gulp.dest('./develop/x-tips-overlay'));
});
/**
 *  Watcher
 * */
gulp.task('watch', function() {
    // Watch less files
    gulp.watch(['./develop/x-tips-overlay/src/*.styl','./develop/x-tips-overlay/vars.styl'],[
        'stylus'
    ]);
    // Watch jade files
    gulp.watch(['./develop/x-tips-overlay/src/*.jade'],[
        'jade'
    ]);
    // Watch js files
    gulp.watch(['./develop/x-tips-overlay/src/*.js'],[
        'js'
    ]);
});

gulp.task('default', ['dev','watch']);