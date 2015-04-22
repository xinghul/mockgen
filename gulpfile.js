+function(undefined) {
  "use strict";

  var gulp       = require("gulp")
  ,   jade       = require("gulp-jade")
  ,   browserify = require("gulp-browserify");

  gulp.task("jade", function() {
    return gulp.src("./build/jade/*.jade")
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest("./app/views/"));
  });

  gulp.task("browserify", function() {
    return gulp.src("./app/javascripts/app.js")
      .pipe(browserify({
        transform: ["reactify", "envify"]
      }))
      .pipe(gulp.dest("./app/javascripts/bundle.js"));
  });

  gulp.task("default", ["jade", "browserify"], function() {

  });
}();
