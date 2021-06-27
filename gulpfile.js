var gulp = require("gulp");
var GJSDuck = require("./index.js");
var gjsduck = new GJSDuck(["--out", "docs"]);
var rimraf = require("rimraf").sync;

gulp.task("test", function() {
    rimraf("docs");
    console.log("Go check to make sure it's good!");
    return gulp.src("index.js")
        .pipe(gjsduck.doc());
});
