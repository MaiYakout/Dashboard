const { dest, series } = require('gulp');
var gulp=require('gulp'),
    sass=require('gulp-sass'),
    pug=require('gulp-pug'),
    concat=require('gulp-concat'),
    minify=require('gulp-minify'),
    autoprefixer=require('gulp-autoprefixer'),
    livereload=require("gulp-livereload"),
    notify=require('gulp-notify'),
    sourcemaps=require('gulp-sourcemaps');
const { logError } = require('gulp-sass');

//HTML Task 
gulp.task("html",function(){
    return gulp.src('stage/html/**/*.pug')
        .pipe(pug({pretty:true}))
        .pipe(gulp.dest('dist'))
        .pipe(notify("HTML Task Finished"))
        .pipe(livereload());
});

//Sass Task
gulp.task("sass",function(){
    return gulp.src(['stage/css/**/*.scss','stage/css/**/*.css'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'compressed'}).on("error",logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(notify("CSS Task Finished"))
        .pipe(livereload());
});

//js Task
gulp.task("js",function(){
    return gulp.src('stage/js/*.js')
        .pipe(concat("plugin.js"))
        .pipe(minify())
        .pipe(gulp.dest("dist/js"))
        .pipe(notify("Js Task Finished"))
        .pipe(livereload())
});

//Watch Task
gulp.task('watch', function() {
    require('./server.js');
    livereload.listen();
    gulp.watch('stage/html/**/*.pug',  gulp.series('html'));
    gulp.watch(['stage/css/**/*.scss','stage/css/**/*.css'],  gulp.series('sass'));
    gulp.watch('stage/js/*.js',  gulp.series('js'));
});