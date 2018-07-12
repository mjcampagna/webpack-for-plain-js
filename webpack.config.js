const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  
  module: {
    rules: [

      { 
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        include: /src/,
        options: {
          presets: ['env']
        }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(gif|jpeg|jpg|png|svg|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path]/[name].[ext]',
              include: [/images/]
            }
          }
        ]
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path]/[name].[ext]',
              include: [/fonts/]
            }
          }
        ]
      }

    ] // rules
  }, // module

};