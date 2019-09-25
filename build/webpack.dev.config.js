//导入模块
const path =require("path");
//页面入口
const entry = require("./entry.config");
//配置模块
const rules = require("./loader.config");
//插件
const plugins = require("./plugin.config")

module.exports ={
    // 定位到根目录
    context:path.resolve(__dirname,"../"),
    // 指定开发模式
    mode:"development",
    // 入口
    entry,
    // 出口
    output:{
        path:path.resolve(__dirname,"../dist/"),
        filename:"static/js/[name]-[hash:5].js",
        publicPath:"http://localhost:8090/"
    },
    // 配置模块
    module:{rules},
    //配置插件
    plugins,
    devServer: {
        contentBase: path.resolve(__dirname,"../dist/"),
        host:"localhost",
        open: true,
        hot: true,
        port: 8090,
        inline:true
    },
}
