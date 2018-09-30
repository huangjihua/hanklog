# gulp使用总结


```
 let gulp = require('gulp');
 //自动加载gulp-*插件 ，下面的gulp-*插件都可以省略
 let $ = require('gulp-load-plugins')();
 let px2rem = require('postcss-px2rem');

 let gutil = require('gulp-util');
 let concat = require('gulp-concat');
 //gulp-rev-append   给URL自动添加MD5版本号
 let rev = require('gulp-rev-append');
 let gulpif= require('gulp-if');
 let replace = require('gulp-replace');
 let rename =require('gulp-rename');
 let autoprefixer = require('gulp-autoprefixer');
 let cleanCSS = require('gulp-clean-css');
 let sourcemaps = require('gulp-sourcemaps');
 let header = require('gulp-header');
 let postcss = require('gulp-postcss');
 let minify = require('gulp-minify-css');
 //批量增加命名空间
 let cssWrap = require('gulp-css-wrap');
 // let through = require('through2'); //自定义插件
```
