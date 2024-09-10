var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');

// Pretvara SCSS u CSS, minificira datoteku i sprema u /dist folder
gulp.task('sass', function () {
  return gulp
    .src('styles.scss')
    .pipe(sass()) // Compile SCSS code to CSS code
    .pipe(cssnano()) // Minify CSS with CSSNANO
    .pipe(gulp.dest('dist')); // Output to "dist" folder
});

// Uglify sav JavaScript kod i sprema ga u /dist folder
gulp.task('js', function () {
  return gulp
    .src('scripts/**/*.js')
    .pipe(uglify()) // Uglify JS code
    .pipe(gulp.dest('dist')); // Output to "dist" folder
});

// Prati promjene na SCSS i JS datotekama na stranici i refresha stranicu nakon bilo kakve promjene

gulp.task('watch', function () {
  gulp.watch('*.scss', gulp.series('sass')); // Watch: Allows watching globs and running a task when a change occurs. Tasks are handled uniformly with the rest of the task system.
  gulp.watch('scripts/**/*.js', gulp.series('js')); // Series: Combines task functions and/or composed operations into larger operations that will be executed one after another, in sequential order.
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));
