const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/demo3/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/demo3/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};