const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
    output: {
        //path: __dirname + "/public",//打包后的文件存放的地方
        path: __dirname + "/build",
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader",
                        options:{
                            modules: true
                        }
                    },{
                        loader: "postcss-loader"
                    }

                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有,翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
}