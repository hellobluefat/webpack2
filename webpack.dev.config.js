const path = require('path');
var webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
  entry:'./src/index.js',
  output: {
    // webpack 如何输出结果的相关选项

    //path: path.resolve(__dirname, "build"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: "build/bundle.js",// string
    publicPath:"/"
  },
  devServer: {
    // contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
    hot:true,
    historyApiFallback: true
  },
  devtool:"source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.css$/,
        use:['style-loader','postcss-loader']
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      },
      { test: /\.less$/,
        use: ['style-loader','postcss-loader','less-loader']
      },
      { test: /\.(jpe?g|npg)$/, use:"file-loader"},
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:'templete/index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3000'
    })
  ]
}
