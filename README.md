# What's the point with the automation process?

The reason you want to autmate your project is that is makes everything easier for developers, especially for big projects with multiple developers involved. It also subtract many extra steps for publishing to the internet.

---

# Packages, tools, plugins and why

## + node.js
  > node.js is an JavaScript runtime environment. This is needed to run Gulp.
## + npm
  > npm is short for Node Package Manager which can be used to install packages, version management and dependency management. Like a library for your project.

  
## + gulp
  > gulp is a tool used for a lot of things. Some of them are creating a web server, reloading browser automatically and optimizing assets like CSS, JavaScript and images.
## + gulp-imagemin
  > gulp imagemin is used minify images and optimize them for websites.
## + gulp-concat
  > gulp concat is used to combine multiple files into one single file, concat is short for concatenate.
## + gulp-uglify-es
  > gulp uglify is used to compress the code and remove unnecessary space or syntax to optimize runtime.


## + browser-sync
  > browser sync is a npm tool which can be used to create a small server. This is very useful because it allows you to obeserve your project with live reloading in the browser. 

---

# How to use

This repo contains an automated system which copies the local "working files" from the 'src' directory to the public directory 'pub'. It also concatenates the files and updates and compresses the files live, which can be observed with the live server tool 'browser sync'. Right now, the avilable functions for automation are CSS- and JS-files and images.

## 1. To start this system you need to have Node.Js installed on your computer.Then you need to install npm:

> [Download Node here](https://nodejs.org/en/)

## 2. Then you need to install Git on your computer:

> [Download Git here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
Or check if you already have it installed with the command: 
> git --version

## 3. Then, in your new set-up working directory - clone this repo:

> git clone https://github.com/maso1905/record-player 

## 4. Then you run:

> npm init

## 5. Then you install the gulp packages and browser sync tool mentioned earlier as dev dependencies.

## 6. Then finally you run the system with simply:

> gulp

