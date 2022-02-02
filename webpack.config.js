const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin'); /* Very Useful Plugin */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    'bundle': './src/index.js',
    'assets/js/banner': './src/assets/js/banner.js',
  },
  output: {
    // publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: false /* عشان الملفات الغريبه اللي ظهرت في مجلد ال build*/,
    port: 1112,
    liveReload: true,
    open: true,
    devMiddleware: { writeToDisk: true },
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        exclude: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },

      { // To Transform ES6 Syntax into normal javascript Syntax that browsers support.
        test: /\.js$/,
        exclude: /node_modules/,
          use: {
            loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
          }
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin({}),

    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.css',
    }),

    new OptimizeCssAssetsPlugin({}),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/button.html',
      filename: 'components/button.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/textfield.html',
      filename: 'components/textfield.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/card.html',
      filename: 'components/card.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/banner.html',
      filename: 'components/banner.html',
      chunks: ['bundle', 'assets/js/banner'],
    }),
  ],
};
