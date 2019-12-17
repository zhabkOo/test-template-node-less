const less = require("gulp-less");
const path = require("path");
const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const liveReload = require("gulp-livereload");

function createSyncWithBrowser(cb) {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
}

function compileLess(cb) {
  return src("src/styles/main.less")
    .pipe(less())
    .pipe(dest("./dist"))
    .pipe(browserSync.stream());
}

function pipeHtml(cb) {
  return src("./src/index.html")
    .pipe(dest("./dist"))
    .pipe(browserSync.stream());
}

function pipeImages(cb) {
  return src("src/images/**.*").pipe(dest("./dist/images"));
}

function pipeFonts(cb) {
  return src("src/fonts/**.*").pipe(dest("./dist/fonts"));
}

const startSeries = () => {
  pipeImages();
  pipeHtml();
  pipeFonts();
  pipeImages();
  compileLess();
};

function watchChanges(cb) {
  watch(
    "./src",
    series(pipeImages, pipeHtml, pipeFonts, pipeImages, compileLess)
  );
}

function initCompile() {
  startSeries();
  createSyncWithBrowser();
  liveReload.listen();
}

initCompile();

exports.watch = watchChanges;
exports.default = watchChanges;
