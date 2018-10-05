# gulp使用总结


## 简介

   写这篇文章的目的是：为了介绍我在实践过程中用过的`gulp plugins`,以及遇到的一些坑，作为我的随笔备忘，我会结合少许代码来讲解，最终希望大家能愉快的用上`gulp`让前端项目提升一个高度。并且对`gulp`的了解和使用有一定的帮助。
   首先要了解`npm/cnpm`,目前我喜欢用`yarn`来安装各种包，还需要明白`package.json`和`gulpfile.js`有什么作用。

  早期我用过`grunt`, 为何我转用`gulp`了呢？`gulp`是基于Nodejs的自动任务运行器， 她能自动化地完成 `javascript/coffee/sass/less/html/image/css `等文件的的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。在实现上，她借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单。

   `gulp` 和 `grunt `非常类似，但相比于 `grunt`的频繁 IO 操作，`gulp `的流操作，能更快地更便捷地完成构建工作。

## 必备
 	  项目里不一定要用到，但是需要知道的gulp插件

- [gulp-util](https://www.npmjs.com/package/gulp-util)  基础工具，像个大杂烩，主要是用来打印日志的;
- [gulp-clean-css](https://www.npmjs.com/package/gulp-minify-css)压缩css，本来想说[gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)但是首页说它被弃用了，让选择`gulp-clean-css`;
-[gulp-rename](https://www.npmjs.com/package/gulp-rename) 修改文件名称。比如压针对缩后的样式`index.css`改成`index.min.css`，是不是更高大上;
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) 合并文件，目的为了`减少网络请求`;
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) 专业压缩JS;
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) 根据设置浏览器版本自动处理浏览器前缀。使用她我们可以很潇洒地写代码，不必考虑各浏览器兼容前缀；
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)  专门压缩HTML, 注释啥的都可以去掉；
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) 压缩常见的图片格式，另外还能压缩SVG ;

## 常用
    有用的，但是出现频率和使用场景并不高
- [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) 偷懒用的，自动加载插件，比如gulp-*等，其他的需要手动增加规则，不用另行`require`/`import`,缺点是代码可读性比较差；
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) / [gulp-less](https://www.npmjs.com/package/gulp-less)/ [gulp-stylus](https://www.npmjs.com/package/gulp-stylus)  编译css的,你懂的；
- [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)代码校验；
- [gulp-clean](https://www.npmjs.com/package/gulp-clean)/[del](https://www.npmjs.com/package/del) 清除文件；我的使用场景是：`js`/`css`文件都会压缩后使用`gulp-rev`使得文件名被`hash`,然后上传到CDN，最后清除本地生成的该文件，无需多余保存等；
- [gulp-rev](https://www.npmjs.com/package/gulp-rev)  静态文件名附加`hash`值, 也可以通过`rev.manifest()`生`rev-manifest.json`，比如：`app.css`→`app-d41d8cd98f.css`
- [gulp-rev-replace](https://www.npmjs.com/package/gulp-rev-replace)  重写已被`gulp-rev`重命名的文件名,拿到`rev-manifest.json`后替换对应的文件名称
- [gulp-rev-append](https://www.npmjs.com/package/gulp-rev-append) 给页面引用的静态文件增加rev=`hash`版本，避免浏览器缓存，如用了 `CDN`，这个套路就行不通了；
- [gulp-rev-collector](https://www.npmjs.com/package/gulp-rev-collector) 上线前，我会用来配合[gulp-rev](https://www.npmjs.com/package/gulp-rev)使用，替换 `HTML` 中的静态文件与`rev-manifest.json`对应文件名的路径；
- [gulp-connect](https://www.npmjs.com/package/gulp-connect) / [gulp-livereload](https://www.npmjs.com/package/gulp-livereload) `LiveReload`  前者是：运行web服务器的gulp插件(带有LiveReload )   ，后者是一个轻量级livereload插件，俩个插件都值得拥有；
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) 处理 `JavaScript` 时生成 `SourceMap`用于源码调试；建议看看阮一峰大神的[《Source Map 详解》](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

## 进阶
    下载量没必备和常用插件高，同样也值得拥有
- [gulp-if](https://www.npmjs.com/package/gulp-if) /[gulp-if-else](https://www.npmjs.com/package/gulp-if-else) 可以在pipe里做判断和写逻辑，屌不屌，比如用来区分`dev`开发环境和`prod`生产环境；
- [gulp-git](https://www.npmjs.com/package/gulp-git) 直接在`build`时包代码提交到Git上了... ，懒人的福音。
- [gulp-qinniu](https://www.npmjs.com/package/gulp-qiniu) 用于把指定文件上传至七牛的指定路径下( 前提提交：得有七牛账号和空间)
- [gulp-babel](https://www.npmjs.com/package/gulp-babel)/ [babel](https://www.npmjs.com/package/babel) `javascript`编译，可以用ES6/7新语法写`javascript`代码,利用这个插件向下*转换编译*生成通用的`javascript`代码（解决兼容性问题生成兼容性代码），注意：用`gulp-babel`要安装`@babel/core^7.0.0`以上版本；
- [gulp-coffee](https://www.npmjs.com/package/gulp-coffee) 作用：编译`CoffeeScript`	; 它可以与[gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)一起使用，以生成`coffee`到`javascript`转换的源映射。您需要在运行[gulp-coffee](https://github.com/floridoo/gulp-coffee) 编译器之前初始化[gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)并在之后编写源映射;
- [gulp-markdown](https://www.npmjs.com/package/gulp-markdown)`markdown`转成`HTML`， 简直是手写文档的福音啊；
- [gulp-html2md](https://www.npmjs.com/package/gulp-html2md) 把 `HTML` 编译为 `Markdown`
- [sprity](https://www.npmjs.com/package/sprity) 生成雪碧图
- [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) 针对HTML项目组件化
- [gulp-notify](https://www.npmjs.com/package/gulp-notify)一款通知插件
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)防止因`gulp`插件错误而导致的管道破裂,这个补丁插件正在修复节点流管道的问题; 假如发生错误进程就挂了，不过这有点坑
- [gulp-flatten](https://www.npmjs.com/package/gulp-flatten)移动制定文件，有些时候不想对某些文件处理，就直接移动到制定文件夹
- [gulp-css-wrap](https://www.npmjs.com/package/gulp-css-wrap) 批量给CSS增加命名空间
- [postcss](https://www.npmjs.com/package/postcss) 它可以被理解为一个平台，可以让一些插件在上面跑，它提供了一个解析器，可以将CSS解析成抽象语法树，通过PostCSS这个平台，我们能够开发一些插件，来处理CSS。热门插件`autoprefixer`
- [postcss-px2rem](https://www.npmjs.com/package/postcss-px2rem)  px自动转rem基于flexble布局
## 谈谈gulpfile.js
    
   上面巴拉巴拉说了一通插件，聊gulpfile前最后自行了解`gulp`API，这个没啥好说的，看文档吧，还是来电干货吧。
 一个简单的前端项目，`gulpfile.js`可以轻松上百行代码，稍复杂点的会更大，非常易于阅读和维护；
  比如下面来一个稍复杂点项目目录仅供参考：
config/
	-  env.js  //环境
	-  global.js //公用
task/
	- watch.js
	- sass.js
  	- image.js
 	- log.js
 	- ....
 gulpfile.js

- `config`目录里写一些公用的配置文件以及公用的参数，代码结构比较优雅
- `task`目录里存放分类的task子任务，是不是清晰多了。
 简单的套路就是直接在gulpfile.js里直接撸了，稍复杂的就上面这种，具体情况根据项目而定；
下面就几种套路说明下：

简单型：（项目/人群  目标：要求较高的个人、公司内部、小商业等项目）
	1.`HTML`组件化，该`common`的提取出来、该`widget`的拎出来；
	2. 图片的合并、压缩
	3.`JS/CSS/HTML`合并和压缩
	4. `sass/less/stuly` 搞起来，不然怎么显得高大上呢

 一般型：（项目/人群  目标：喜欢尝试个人项目、一般商业项目要求比较高的开源项目）

主要需求：
	1. 包含上面简单的所有项
	2. `javascript`利用ES6/7来编写 （技术红利干嘛不用呢）
 	3. `javascript` 代码校验用起来
	4. `css`根据项目所需的浏览器版本，自动处理浏览器前缀
	5. 静态文件全部上CDN
	6.把`task`拆分，使其易维护；

复杂型：（项目/人群 目标：商业项目、代码洁癖者...）
	1. 包含上面一般的所有项
	2.增加对`gulp` 进程出错的优雅处理 => `gulp-plumber`
	3.`task`里逻辑处理
	4.自动清理不用的临时文件
	5. `liveReload`用起来
	6.同步代码`git`用起来

另外`gulp`可以结合`webpack`一起使用，开发react项目，简直爽到爆 ，推荐篇文章 [基于gulp和webpack的前端工程化](https://www.cnblogs.com/chris-oil/p/5979321.html)
## 编写gulp插件
   这个我发现官方文档和详情了， [自定义gulp插件](https://www.gulpjs.com.cn/docs/writing-a-plugin/)

## 参考文献
- [gulp官方](https://gulpjs.com/)
- [gulp中文网](https://www.gulpjs.com.cn/)

