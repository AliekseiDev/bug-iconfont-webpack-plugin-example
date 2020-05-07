const path = require('path');
const fs = require('fs');
const IconfontWebpackPlugin = require('iconfont-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './styles/index.scss',
//   output: {
//     filename: 'js/[name].js',
//     path: path.resolve('build'),
//     publicPath: '/'
//   },
  module: {
    rules: [
    //   {
    //     // JavaScript
    //     test: /\.js$/,
    //     loader: 'babel-loader',
    //     exclude: '/node_modules/'
    //   },
      {
        // scss
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: (loader) => [
                // new IconfontWebpackPlugin(loader),
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
        ],
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './index.html'
      })
  ]
};