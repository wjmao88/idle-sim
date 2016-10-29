const gulp = require('gulp');
const named = require('vinyl-named');

//css
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
//js
const webpack = require('webpack-stream');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const webpackConfg = require('./webpack.config.js');

const logError = function(error){
    console.warn(error);

    this.emit('end');
};

gulp.task('scripts', function() {
    return gulp.src('app/index.js')
        .pipe(named())
        .pipe(eslint('.eslintrc.js').on('error', logError))
        .pipe(webpack(webpackConfg).on('error', logError))
        //.pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'))
        .pipe(notify('scripts done'));
});

gulp.task('sass', function() {
    return gulp.src('app/styles/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(named())
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/'));
});

gulp.task('html', function() {
    return gulp.src('app/index.html')
        .pipe(named())
        .pipe(gulp.dest('dist/'));
});

gulp.task('vue-material-css', function(){
    return gulp.src('node_modules/vue-material/dist/vue-material.css')
        .pipe(named())
        .pipe(gulp.dest('dist/'));
})

gulp.task('watch', function() {

  try {
    // Watch .scss files
    gulp.watch('app/**/*.sass', ['sass', 'vue-material-css']);

    // Watch .js files
    gulp.watch('app/**/*.js', ['scripts']);

    gulp.watch('app/**/*.vue', ['scripts']);

    // Watch image files
    gulp.watch('app/index.html', ['html']);
  } catch(e) {
    console.log(e);
  }

});