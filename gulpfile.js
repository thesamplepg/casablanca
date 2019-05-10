const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const sassCompile = () => {
    return src('./sass/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(dest('./css'));
}

const htmlCompile = () => {
    return src('./*.html')
        .pipe(minify())
        .pipe(dest('./html'));
}

const watcher = () => {
    watch('./sass/*.scss', sassCompile);
}

const defaultTask = (callback) => {
    watcher();
    callback();
}

exports.default = defaultTask;