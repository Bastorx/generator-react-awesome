const webpack = require("webpack");
const config = require("./webpack.config");

module.exports = {
  ...config,
  plugins: config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ])
};
