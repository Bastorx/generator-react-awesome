const webpack = require("webpack");
const path = require("path");

const devConfig = process.env.NODE_ENV === "development";

let plugins = [
  new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
  new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 })
];

if (devConfig) {
  plugins = plugins.concat([
    new webpack.SourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]);
} else {
  plugins = plugins.concat([new webpack.optimize.UglifyJsPlugin()]);
}

module.exports = {
  entry: path.join(__dirname, "src/app.js"),
  output: {
    path: __dirname + "/dist",
    publicPath: "",
    filename: "[name].js"
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
  plugins: plugins
};
