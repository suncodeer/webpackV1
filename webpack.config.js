 const webpack = require('webpack');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 var copyright = require('./app/copyright.json');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
 module.exports = {

 	devtool: 'eval-source-map',
 	entry: __dirname + "/app/main.js",
 	output: {
 		path: __dirname + "/public",
 		filename: "bundle.js"
 	},
 	plugins: [
        new webpack.BannerPlugin(copyright.content),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.template.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
    ],
 	devServer: {
 		contentBase: "./public",
 		historyApiFallback: true,
 		inline: true
 	}
}