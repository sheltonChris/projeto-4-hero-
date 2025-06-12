// use o gulp na versão 4.0.2 e o imagemin 7.1.0

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({ outputStyle:'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function minImages() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(styles, minImages);
exports.watch = function() {
    gulp.watch('./source/styles/*.scss', gulp.parallel(styles))
}