const path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
  entry:'./src/index.js',
  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, "build"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: "bundle.js",// string
    publicPath:"build/"
  },
  watch:true,
  devtool:"source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "postcss-loader"
        })
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      },
      { test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["postcss-loader","less-loader"]
        })
      },
      { test: /\.(jpe?g|npg)$/, use:"file-loader"},
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
    }),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template:'templete/index.html',
      filename:path.resolve(__dirname,'index.html')
    })
  ]
}
