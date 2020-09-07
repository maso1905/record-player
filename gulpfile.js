const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const { src, series, parallel, dest, watch } = require('gulp');


// Paths  src/css/js
const files = { 
  htmlPath: "src/**/*.html", 
  cssPath: "src/**/*.css", 
  jsPath: "src/**/*.js",
  imgPath: "src/images/*"
};


// Copy & concatenate all files with .html from 'src' directory to the 'pub' directory
function copyHtml(){
  return src(files.htmlPath).pipe(dest('pub'));
}
  
// Copy & concatenate all files with .css from 'src/css' directory to the 'pub' directory
function copyCss(){
  return src(files.cssPath)
    .pipe(concat('main.css'))
    .pipe(dest('pub/css'));
}

// Copy & concatenate all files with .js from 'src/js' directory to the 'pub' directory
function copyJs(){
  return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(dest('pub/js'));
}

// Copy & concatenate & minimize all images from 'src/images' directory to the 'pub' directory
function copyImages(){
  return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest('pub/images'));
}

// Watching for changes in all html, css, js & img files.
function watchTask() {
  watch([files.htmlPath, files.cssPath, files.jsPath], 
    parallel(copyHtml, copyCss), copyJs, copyImages);
}

// Exports to the public directory 'pub'
exports.default = series(
  parallel(copyHtml, copyCss), 
  copyJs,
  copyImages,
  watchTask
);



