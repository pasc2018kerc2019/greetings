const { resolve } = require('path');

module.exports = {
  entry: resolve('./PokeList.js'),
  mode: 'development',
  watch :true,
  output: {
    path: resolve('./'),
    filename: 'PokeList.min.js'
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
           
          },
        ],
      },
      
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },


    ]
  }
}