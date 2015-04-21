+function(undefined) {
  "use strict";

  var gulp = require("gulp")
  ,   jade = require("gulp-jade");

  gulp.task("jade", function() {
    gulp.src("./build/jade/*.jade")
      .pipe(jade({
        pretty: true
      }))
      .pipe(gulp.dest("./app/views/"));
  });

  gulp.task("default", ["jade"], function() {

  });
}();
