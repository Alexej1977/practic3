

const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const del = require('del');
const sync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');


function scss() {
	return src('style/scss/main.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			overrideBrowserslist: ["last 2 versions"]
		}))
		//.pipe(concat("main.css"))
		.pipe(dest('style/css/'));
}

function clear() {
	return del('style/css/main.css');
}

function browserSync() {
	sync.init({
		server: './'
	})

	watch('style/scss/**.scss', series(clear, scss)).on('change', sync.reload);
	watch('**.html', series(clear, scss)).on('change', sync.reload);
}

exports.scss = scss;
exports.clear = clear;
exports.build = series(clear, scss);
exports.default = browserSync;
