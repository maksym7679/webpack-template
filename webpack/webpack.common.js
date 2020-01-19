const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: path.join(__dirname, "..", "src/index.js"),
  output: {
    filename: !isDev ? '[name].[hash].js' : '[name].js',
    path: path.join(__dirname, "..", "/dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "..", "src/index.html")
    })
  ],
}