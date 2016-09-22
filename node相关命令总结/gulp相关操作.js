
// require('gul')会自动去当前目录中的node_modules中寻找gulp文件夹，在其中寻找相应的文件，得到相应的对象.
var gulp = require('gulp');

// gulp-uglify

var uglify = require('gulp-uglify');

// gulp-concat
var concat = require('gulp-concat');

// gulp-cssnano 对css进行压缩

var cssnano = require('gulp-cssnano');


var htmlmin = require('gulp-htmlmin')


var browserSync = require('browser-sync');
// js 压缩，混淆，合并


//1. 创建一个任务
// 第一个参数，是任务名，第二个参数是具体要执行的方法
gulp.task('script',function(){
   // 代码写在这里
   // 2.匹配我们要处理的文件
   // './*.js'
   // 如果想要匹配多个规则，则使用数组形式
   gulp.src(['./app.js','./signIn.js'])
   .pipe(concat('all.js'))// 对文件进行合并,参数是生成的文件名
   .pipe(uglify()) // 对应文件进行压缩
   .pipe(gulp.dest('./dist'))// 指定文件最终输出到dist目录
});

// css 压缩，合并.

//2.创建一个任务
gulp.task('style',function(){
  // 压缩
  // 匹配规则
  gulp.src(['./style.css','./signIn.css'])
  .pipe(concat('all.css')) // 合并css
  .pipe(cssnano())         // 压缩css
  .pipe(gulp.dest('./dist')) // 指定输出目录
});

// watch 监视文件变化，自动执行相应任务

// 第一个参数，是监视的文件,
// 第二个参数，是文件变化后要执行的任务
gulp.task('mywatch',function(){
  // 初始化browser-sync
  browserSync.init({
    server:'./dist' ,//指定网站的根目录,一般网站不能够访问网站根目录父级
    files:['./dist/index.html','./dist/all.css','./dist/all.js']
  });
  gulp.watch(['./app.js','./signIn.js'],['script']);
  gulp.watch(['./style.css','./signIn.css'],['style']);
  gulp.watch(['./index.html'],['html'])
});

// 压缩 html
gulp.task('html',function(){
   // 匹配规则
   gulp.src('./index.html')
   .pipe(htmlmin({collapseWhitespace:true})) //压缩html
   .pipe(gulp.dest('./dist'));
})