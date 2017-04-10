const gulp = require('gulp');
const watch = require('gulp-watch');

const paths = {
	client: "./client/**/*.*",
	server: "./server/**/*.*",
	dist: "./dist"
};

gulp.task('client', () => {
	return gulp.src(paths.client)
		.pipe(gulp.dest(paths.dist));
});

gulp.task('server', () => {
	return gulp.src(paths.server)
		.pipe(gulp.dest(paths.dist));
});


gulp.task('watch', function () {
	// Endless stream mode
	return watch([paths.client, paths.server], { ignoreInitial: false })
		.pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['client', 'server', 'watch']);