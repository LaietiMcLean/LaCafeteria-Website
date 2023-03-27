const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css() {
    return src('src/scss/app.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('build/css'));
}

function images() {
  return src('src/img/**/*')
    .pipe(dest('build/img'));
}

function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', images);
}

exports.css = css;
exports.dev = dev;
exports.default = series(images, css, dev)
