const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Obsługuje pliki JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Użycie Babel
          },
        },
      },
      {
        test: /\.scss$/, // Obsługuje pliki SCSS
        use: [
          MiniCssExtractPlugin.loader, // Wyciąga CSS do osobnych plików
          'css-loader', // Tłumaczy CSS na CommonJS
          'sass-loader', // Kompiluje Sass do CSS
        ],
      },
      {
        test: /\.html$/, // Obsługuje pliki HTML
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Poprawna nazwa wynikowego pliku CSS
    }),
  ],
};
