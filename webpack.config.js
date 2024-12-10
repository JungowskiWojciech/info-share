const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './src/main.scss'
  ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
  },
  optimization: {
    usedExports: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      chunks: ['main'], // Wstawianie tylko głównego chunka
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Statyczna nazwa dla CSS
    }),
  ],
};
