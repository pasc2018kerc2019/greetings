const { resolve } = require('path');

module.exports = {
  entry: resolve('./Todo.js'),
  mode: 'development',
  watch :true,
  output: {
    path: resolve('./'),
    filename: 'Todo.min.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}