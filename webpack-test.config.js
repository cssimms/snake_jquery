var JasmineWebpackPlugin = require('jasmine-webpack-plugin');
 
module.exports = {
  context: __dirname,
  entry: ['./spec/specRoot.js'],
  plugins: [new JasmineWebpackPlugin()],
  output: {
    path: ".",
    filename: "_specRunner.html",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps'
};
