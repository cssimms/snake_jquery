module.exports = {
  context: __dirname,
  entry: __dirname + "/js/main.js",
  output: {
    path: __dirname + "/js",
    publicPath: "/js/",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps'
};
