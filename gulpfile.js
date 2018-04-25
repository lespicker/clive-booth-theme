gulp = require('gulp');
gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./themes/tachyons-cb/static/src/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./themes/tachyons-cb/static/css'));
});

gulp.task('watch', function() {
  gulp.watch('./themes/tachyons-cb/static/src/**/*.css', ['autoprefixer']);
});