//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp')//本地安装gulp所用到的地方
 //var connect=require("gulp-connect")//服务器插件
var uglify=require("gulp-uglify")//压缩js插件
//var minify=require("gulp-minify-html");//压缩html插件
var minifycss=require("gulp-minify-css")//压缩css插件
var imagemin=require("gulp-imagemin");//压缩image插件
//var less=require("gulp-less");//less文件转换为css插件
//用到的插件
gulp.task('copy-index', function () {//定义一个任务copy  index.html放在dist环境中
   		 gulp.src('src/index.html') //该任务针对的html文件
   		// .pipe(minify())//压缩html文件
         .pipe(gulp.dest('dist'))//放在测试环境中在dist下生成index.html文件
    	// .pipe(connect.reload());//服务器刷新
});
 
 gulp.task('copy-css', function () {//定义一个任务copy style.css文件放在dist环境中
    gulp.src('src/css/css.css') //该任务针对的css文件
	.pipe(minifycss())//压缩css文件
    .pipe(gulp.dest('dist/css'))//将会在dist/css下生成style.css文件
   // .pipe(connect.reload());
});

gulp.task('copy-less', function () {//定义一个任务copy .less文件刚在测试环境中
    gulp.src('src/less.less') //该任务针对的.less文件
		//.pipe(less())//将.less文件转换为css文件
		.pipe(minifycss())//压缩css
        .pipe(gulp.dest('dist/css'))//将会在dist/css下生成less.css
       // .pipe(connect.reload());
});
gulp.task("copy-js",function(){//定义一个任务copy .js 文件放在测试环境中
	gulp.src("src/js/js.js")//针对的js文件
	.pipe(gulp.dest('dist/js'))//放在测试环境dist文件的js下
	//.pipe(connect.reload());
	
})
gulp.task("copy-image",function(){//定义一个任务 copy image 文件放在测试环境下的image文件中
	gulp.src("src/img/*{.jpg,.png}")//针对的image图片
	.pipe(imagemin())//压缩图片
	.pipe(gulp.dest("dist/img"))//放在测试环境下的img文件中
	//.pipe(connect.reload());
})
//gulp.task("copy-src",function(){
//	gulp.src("src/**/*").pipe(gulp.dest("dev"))
//})
// 
//gulp.task('default',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径
gulp.task("watch",function(){
	return gulp.watch("src/index.html",["copy-index"])//监听html文件
	gulp.watch("src/style.css",["copy-css"])
	gulp.watch("src/js/js.js",["copy-js"])
	
	
})
//gulp.task("server",function(){
//	return connect.server({
//		root:'dist',//测试环境根目录
//		port:"8888",//计算机端口号
//		livereload:true//热替换
//	})
//})
gulp.task("default",["server","watch"])//定义默认任务数组中放的是其他任务名称
gulp.task("xiugai-js",function(){
	gulp.src("src/js/js.js")
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
	//.pipe(connect.reload())
})


////导入工具包 require('node_modules里对应模块')
//var gulp = require('gulp'), //本地安装gulp所用到的地方
//  less = require('gulp-less');
// 
////定义一个testLess任务（自定义任务名称）
//gulp.task('testLess', function () {
//  gulp.src('src/less/index.less') //该任务针对的文件
//      .pipe(less()) //该任务调用的模块
//      .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
//});
// 
//gulp.task('default',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
// 
////gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
////gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
////gulp.dest(path[, options]) 处理完后文件生成路径