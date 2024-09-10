const gulp = require('gulp'); // Gulp
const uglify = require('gulp-uglify'); // Gulp Uglify
const cleanCSS = require('gulp-clean-css'); // Gulp Clean CSS

gulp.task('uglify', () => {
  return gulp.src('js/**/*.js').pipe(uglify()).pipe(gulp.dest('build/js'));
});

gulp.task('minify-css', () => {
  return gulp.src('styles/*.css').pipe(cleanCSS()).pipe(gulp.dest('build/css'));
});
