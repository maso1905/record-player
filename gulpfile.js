const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');

var browserSync = require('browser-sync').create();


// Paths  src/css/js
const files = { 
  htmlPath: "src/**/*.html", 
  cssPath: "src/**/*.css", 
  jsPath: "src/**/*.js",
  imgPath: "src/images/*"
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
  watch([files.htmlPath, files.cssPath, files.jsPath, files.imgPath], 
    parallel(copyHtml, copyCss, copyJs, copyImages));
}


// Exports to the public directory 'pub'
exports.default = series(
  parallel(copyHtml, copyCss, copyJs, copyImages),
  watchTask
);


/**
 * This example will serve files from the './app' directory
 * and will automatically watch for html/css/js/img changes
 */
browserSync.init({
  watch: true,
  server: "src"
});
