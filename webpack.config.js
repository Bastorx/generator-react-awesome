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
  }
};
