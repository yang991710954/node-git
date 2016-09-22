### npm

> node中的模块管理工具

* `npm init`   初始化，对于初始化的参数可以全为空

* `npm install [包名] `    安装指定包

* ``npm install -g [包名] --registry http://192.168.112.92`` 下载包，-g参数代表安装在全局下，--registry代表暂时以某地址下载

* `npm  remove [包名]`  移除指定包

* `npm update  [包名]`  更新包

* `npm remove  [包名] --save`    删除指定包  --save代表保存到`package.json` 设置中。

* `npm install --production`    安装package.json 里面的包，添加了--production参数不会安装devDependencies下面的包

* `npm ls`  查看当前安装的所有包

* `npm root `查看当前包的安装路径

* `npm root -g `查看全局的包的安装路径

* `npm -v`  查看npm版本

* `npm  updated`  检查过时的包

* `npm  install express`  按版本安装

* `npm install <name> [–save|–save-dev|–save-optional]`

  其中：

  添加–save 参数安装的模块的名字及其版本信息会出现在`package.json` 的`dependencies` 选项中

  添加–save-dev 参数安装的模块的名字及其版本信息会出现在`package.json` 的`devDependencies` 选项中

  添加–save-optional 参数安装的模块的名字及其版本信息会出现在`package.json` 的`optionalDependencies` 选项中

  ​


### nvm

>node版本管理工具

- `nvm ls`  查看已安装的版本
  - `nvm ls -remote`查看可以安装的node版本

- `nvm  install [version]`  安装一个指定的node版本

- `nvm use [version]`  切换node版本

  ​



### nrm
> 管理npm的下载地址
* `npm install -g nrm`   安装nrm
* `nrm ls`   列出所有地址
* `nrm add [地址名称] [具体地址]` 增加一个下载地址
* `nrm del [地址名称]` 删除一个下载地址
* `nrm use [地址名称]` 设置此地址为默认下载地址




## bower

>客户端软件包管理器(通过npm安装)

1. 准备工作:
   - 安装node环境
   - 安装git、bower从远程git仓库获取代码包
2. 安装bower：
   - npm  install  -g  bower
3. 初始化：
   - bower  init 
4. 包的安装：
   - bower  install  jQuery  --save
5. 包的信息
   - bower  info  jQuery
6. 包的更新
   - bower  update
7. 包的查找
   - bower  search  jQuery
8. 包的卸载
   - bower uninstall  jQuery



### browser-sync 

> 浏览器自动刷新插件

* 全局安装：`npm install browser-sync -g`
* 启动服务：当前目录打开cmd， `browser-sync start --server --no-online --files "./index.html,app.css,css/*.css,*.*"`
* --files 参数后跟文件名，代表监听哪个文件，多个文件用逗号隔开。
* --no-online 如果长时间打不开服务，建议加上这个参数，强制离线打开

gul教程:http://www.ydcss.com/archives/18#lesson9



### gulp

> gulp是前端开发过程中对代码进行构建的工具，是自动化项目的构建利器

* 全局安装命令： `npm install gulp-cli -g --save`
* gulp使用时还需要在当前项目目录安装：`npm  install gulp --save-dev`
* 使用的时候要将代码写到：`gulpfile.js`中

> gulp 的5个核心方法

* `task("任务名",callback)`
* `src(["./js/*.js","./css/*.css"])`  传入需要处理的文件路径，多个文件则需要转为数组形式
* `dest("./dir")`  指定处理后的文件传出路径
* `watch("./js/*.js",['任务名1'，'任务名2'])` 监听文件如为单个文件，可以为字符串形式，多个文件为数组形式，但第二个参数——执行任务必须为数组形式，不管任务是否为单个
* `run("任务名")` 单个任务可以字符串，多个任务为数组形式或用逗号隔开各任务，


```
var gulp = require("gulp");
gulp.task("script",function(){
gulp.src(["./style.css","./signIn.css"]) //指定文件路径
.pipe(concat("all.css")) //合并为一个文件
.pipe(cssnano())//压缩，混淆
.pipe(gulp.dest("./dist"))//定义输出路径
});

```

> gulp 的其他几个插件，分别用于对html、css、js进行压缩等


> 安装代码:npm install  [插件名称]  --save-dev
* gulp-concat 代码合并
* gulp-uglify js代码压缩
* gulp-cssnano css代码压缩
* gulp-htmlmin html代码压缩,压缩需要额外传入参数（如空白符等）

gul教程:http://www.ydcss.com/archives/18#lesson9