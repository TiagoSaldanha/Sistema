var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

// Task para o sass
gulp.task('sass', function(){
	return sass('sass/**/*.sass').pipe(gulp.dest('css'));
});

// Task para watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
});

// Task para o default
gulp.task('default', ['sass', 'watch']);