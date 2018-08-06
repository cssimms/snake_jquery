var JasmineWebpackPlugin = require('jasmine-webpack-plugin');
 
module.exports = {
  context: __dirname,
  entry: ['/test/specRoot.js'],
  plugins: [new JasmineWebpackPlugin()],
  output: {
    path: __dirname,
    filename: "_specRunner.html",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps'
};
