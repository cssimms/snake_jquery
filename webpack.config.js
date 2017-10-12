var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./js/main.js",
  output: {
    path: __dirname,

    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  devtool: 'source-maps',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        rules: [
          {
            test: /\.js$/,
            exclude:/(node_modules)/,
            loader:"babel-loader",
            query:{
              presets:["env"]
            }
          }
        ]
      }
    })
  ]
};
