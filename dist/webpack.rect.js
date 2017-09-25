const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: './rect-custom-js.js',
  output: {
    filename: 'rect-bundle.js',
    path: path.resolve(__dirname, 'dist-custom-elements')
  },
  plugins: [
    new MinifyPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
