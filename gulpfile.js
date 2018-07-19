const gulp = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");

gulp.task('copyHtml', () => {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return gulp.src('./src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', () => {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('imageMin', () => {
  return gulp.src('./src/img/*')
    .pipe(imagemin([imagemin.jpegtran({ progressive: true })]))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function () {
  gulp.watch("src/*.html", gulp.series("copyHtml"));
  gulp.watch("src/js/*.js", gulp.series("scripts"));
  gulp.watch("./src/img/*", gulp.series("imageMin"));
  gulp.watch('./src/*.sass', gulp.series('sass'));
});

gulp.task(
  "default", 
  gulp.series(gulp.parallel("copyHtml", "imageMin", "scripts", "sass", "watch"))
);