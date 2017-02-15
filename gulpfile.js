var fs = require("fs");
var gulp = require('gulp');
var del = require('del');
var babel = require('gulp-babel');
var minify = require('gulp-minify');
var gulpSync = require('gulp-sync')(gulp);
var babelify = require('babelify');
var browserify = require('browserify');
var watch = require('gulp-watch');
var replaceSrc = require('gulp-replace');

gulp.task('default', gulpSync.sync(['babelify', 'transpile', 'minify', 'replace-src']));

gulp.task('transpile', function(done) {
	return gulp.src('./layer/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./lib/'));
});

gulp.task('minify', function() {
	return gulp.src('./dist/app.js')
		.pipe(minify({
			ext: {
			},
			exclude: [],
			ignoreFiles: []
		}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('babelify', function() {
	return browserify('./index.js')
		.transform(babelify)
		.bundle()
		.pipe(fs.createWriteStream('./dist/app.js'));
});

gulp.task('replace-src', function() {
	del(['./dist/index.html']);

	return gulp.src(['./index.html'])
		.pipe(replaceSrc(/(\.)?\/index.js/, './app.js'))
		.pipe(gulp.dest('./dist'));
});
