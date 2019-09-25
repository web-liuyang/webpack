## 基于webpack 的模块开发文档基本结构

### 一、根目录结构

**1.`build`文件夹 （webpack配置文件夹）**

> entry.config.js: 入口文件模块
>
> html.config.js: 页面处理模块
>
> loader.config.js: 配置模块
>
> plugin.config.js 导入插件模块
>
> webpack.dev.config.js: webpack处理模块


**2.`dist`文件夹（编译后页面生成的文件夹）**

> static: pages|css|js|img等文件夹目录
>
> index.html: 主页

**3.`src`文件夹（代码写入文件夹）**

> images: 图片文件夹
>
> js: js文件夹
>
> pages: html页面文件夹
>
> sass: sass文件夹
>
> index.html: 首页

**4.`package.json`（npm插件）**

### 二、使用说明

因为安装npm插件的时候会在根目录下自动生成node文件夹，文件夹较大，所以特意删除。

使用该模板必须安装`node.js`，安装完以后需在终端里面输入`npm i`配置插件即可使用

### 三、命令
**1.`npm run build`**生成src编译后的文件即`dist文件夹`
**2.`npm run dev`**拉起浏览器

### 特别说明 
**本模板为 <u>刘洋</u> 编写所有**

