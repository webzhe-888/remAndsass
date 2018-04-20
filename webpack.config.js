var webpack = require('webpack');
var path = require('path');
module.exports = {
    //页面入口文件配置
    entry:[
        './app.js'
    ],
    //入口文件输出配置
    output:{
        path:path.resolve(__dirname,'./build'),
        filename:'bundle.js'
    },
    module:{
        //记载器配置
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader',
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192',
            }
        ]
    }
}