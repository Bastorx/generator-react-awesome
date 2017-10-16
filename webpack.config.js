const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "app.js"),
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 })
  ]
};