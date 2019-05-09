const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sassCompile = () => {
    return src('./sass/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer())
        .dest('./css');
}

const watch = () => {
    watch('./sass/*.scss', sassCompile);
}

exports.defaultTask = watch;