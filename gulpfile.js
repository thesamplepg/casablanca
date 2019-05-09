const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sassCompile = () => {
    return src('./sass/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(dest('./css'));
}

const watcher = () => {
    watch('./sass/*.scss', sassCompile);
}

const defaultTask = (callback) => {
    watcher();
    callback();
}

exports.default = defaultTask;