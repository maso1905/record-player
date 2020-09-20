const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');
const sass = require('gulp-sass'); 
sass.compiler = require('node-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


// Paths  src/css/js
const files = { 
  htmlPath: "src/**/*.html", 
  cssPath: "src/**/*.css", 
  jsPath: "src/**/*.js",
  imgPath: "src/images/*",
  scssPath: "src/sass/*.scss"
};


// Copy & concatenate all files with .html from 'src' directory to the 'pub' directory
function copyHtml(){
  return src(files.htmlPath)
  .pipe(concat('index.html'))
  .pipe(dest('pub'))
  .pipe(browserSync.stream());
}
  
// Copy & concatenate all files with .css from 'src/css' directory to the 'pub' directory
function copyCss(){
  return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(dest('pub/css'))
    .pipe(browserSync.stream());
} 

// Copy & concatenate all files with .scss from 'src/scss' directory to the 'pub' directory
function copyScss(){
  return src(files.scssPath)
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(sourcemaps.write('.'))
      .pipe(dest('pub/css'));
}


// Copy & concatenate all files with .js from 'src/js' directory to the 'pub' directory
function copyJs(){
  return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(dest('pub/js'))
    .pipe(browserSync.stream());
}

// Copy & concatenate & minimize all images from 'src/images' directory to the 'pub' directory
function copyImages(){
  return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest('pub/images'))
    .pipe(browserSync.stream());
}

// Watching for changes in all html, css, js & img files.
function watchTask() {
  watch([files.htmlPath, files.scssPath, files.cssPath, files.jsPath, files.imgPath], 
    parallel(copyHtml, copyScss, copyCss, copyJs, copyImages));
}


/**
 * This example will serve files from the 'src' directory
 * and will automatically watch for html/css/js/img changes
 */

browserSync.init({
  watch: true,
  server: "src"
});


// Exports to the public directory 'pub'
exports.default = series(
  parallel(copyHtml, copyScss, copyCss, copyJs, copyImages),
  watchTask
);
