const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin'); /* Very Useful Plugin */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
    'assets/js/banner': './src/assets/js/banner.js',
    'assets/js/tabs': './src/assets/js/tabs.js',
    'assets/js/upload': './src/assets/js/upload.js',
    'assets/js/chart': './src/assets/js/chart.js',
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

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },

      {
        // To Transform ES6 Syntax into normal javascript Syntax that browsers support.
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
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

    new HtmlWebpackPlugin({
      template: './src/components/list.html',
      filename: 'components/list.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/tabs.html',
      filename: 'components/tabs.html',
      chunks: ['bundle', 'assets/js/tabs'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/upload.html',
      filename: 'components/upload.html',
      chunks: ['bundle', 'assets/js/upload'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/help.html',
      filename: 'components/help.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/summary.html',
      filename: 'components/summary.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/actions.html',
      filename: 'components/actions.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/sidebar.html',
      filename: 'components/sidebar.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/table.html',
      filename: 'components/table.html',
      chunks: ['bundle'],
    }),

    new HtmlWebpackPlugin({
      template: './src/components/chart.html',
      filename: 'components/chart.html',
      chunks: ['bundle', 'assets/js/chart'],
    }),
  ],
};
