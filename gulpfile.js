var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var liquid = require("gulp-liquidjs");


gulp.task('sass', function() {
  //root scss file (import all your partials into here)
  // return gulp.src('./src/styles/theme.scss/{*.scss,_*.scss, _*.scss.liquid}')
  return gulp.src('./src/styles/theme.scss')
      // .pipe(liquid())
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      // add vendor prefixes
      .pipe(autoprefixer())
      // change the file name to be styles.scss.liquid file
      .pipe(rename('styles.scss.liquid'))
      // remove the extra set of quotations used for escaping the liquid string (we'll explain this in a sec)
      .pipe(replace('"{{', '{{'))
      .pipe(replace('}}"', '}}'))
      // save the file to the theme assets directory
      .pipe(gulp.dest('./src/assets/'));
});

gulp.task('default', function() {
    // this assumes your sass is in a directory named sass
    gulp.watch(['./src/styles/**/*.scss'], ['sass']);
});
