const gulp = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

gulp.task("default", defaultTask);

function defaultTask(done) {
  console.log("gulp is running...");
  done();
}

gulp.task('copyHtml', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return gulp.src('./src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
  gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('imageMin', () =>
  gulp.src('./src/img/*')
    .pipe(imagemin([imagemin.jpegtran({ progressive: true })]))
    .pipe(gulp.dest('dist/img'))
);

gulp.task('watch', function () {
  gulp.watch("src/js/*.js", gulp.series("imageMin"));
  gulp.watch("./src/img/*", gulp.series("imageMin"));
  gulp.watch('./src/*.sass', gulp.series('sass'));
  gulp.watch("src/*.html", gulp.series("copyHtml"));
});
