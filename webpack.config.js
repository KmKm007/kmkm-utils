const webpack = require('webpack')
const path = require('path')

const basePath = path.resolve(__dirname)

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(basePath, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
