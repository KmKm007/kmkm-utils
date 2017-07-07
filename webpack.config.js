const webpack = require('webpack')
const path = require('path')

const basePath = path.resolve(__dirname)

const srcPath = path.resolve(__dirname, 'src')

let fs = require('fs')
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            const isJS = /\.(js|jsx)$/.test(val)
            if (isJS) {
              result.push(val)
            }
        });

    }
    finder(startPath);
    return result;
}
let fileNames = findSync('./src')

const entry = fileNames.reduce((object, name) => {
  object[name] = srcPath + '/' + name
  return object
}, {})


module.exports = {
  entry: Object.assign({}, entry, {
    'index.js': './index'
  }),
  output: {
    path: path.resolve(basePath, 'dist'),
    filename: '[name]'
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
