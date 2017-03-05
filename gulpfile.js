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

function swallowError(error) {
	// If you want details of the error in the console
	console.log('Error occured: ' + error.toString());

	this.emit('end');
}

gulp.task('default', function() {
	//watch('./lib/*', function() {
		gulp.start('mainSequence').on('error', swallowError);
	//});
});

gulp.task('mainSequence', ['babelify', 'transpile', 'minify', 'replace-src']);

// Transpile
gulp.task('transpile', ['babelify'], function(done) {
	return gulp.src('./layer/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./lib/'));
});

gulp.task('minify', ['transpile'], function() {
	return gulp.src('./dist/app.js')
		.pipe(minify({
			ext: {
			},
			exclude: [],
			ignoreFiles: []
		}))
		.pipe(gulp.dest('./dist/'));
});

// Convert imports into require
gulp.task('babelify', function() {
	return browserify('./index.js')
		.transform("babelify", {sourceMaps: true})
		.bundle()
		.pipe(fs.createWriteStream('./dist/app.js'));
});

gulp.task('replace-src', ['minify'], function() {
	del(['./dist/index.html']);

	return gulp.src(['./index.html'])
		.pipe(replaceSrc(/(\.)?\/index.js/, './app.js'))
		.pipe(gulp.dest('./dist'));
});
