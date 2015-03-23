var gulp =  require('gulp'),
            minifyCSS = require('gulp-minify-css'),
            minifyHTML = require('gulp-minify-html');
 
gulp.task('minify-css', function() {
  return gulp.src('css/integration.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/'))
});



 
gulp.task('minify-html', function() {
    return gulp.src('*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/'));
});