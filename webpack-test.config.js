var jasmineWebpackPlugin = require('jasmine-webpack-plugin');
 
module.exports = {
  context: __dirname,
  entry: ['/spec/specRoot.js'],
  plugins: [new JasmineWebpackPlugin()]
  output: {
    path: ".",
    filename: "test.js", //need to figure out how this works
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
};
  devtool: 'source-maps'
};
