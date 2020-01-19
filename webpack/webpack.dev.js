const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/index.html')
    })
  ],
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js", ".jsx", ".css", ".scss", ".html"]
  },
  devtool: 'source-map',
  devServer: {
    https: false,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    compress: true,
    overlay: true,
    historyApiFallback: true
  }
};
