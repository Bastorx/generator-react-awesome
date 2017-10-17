const browserSync = require("browser-sync").create("my-app");

const webpack = require("webpack");
const webpackConfig = require("../webpack.config");

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const historyApiFallback = require("connect-history-api-fallback");

const bundler = webpack(webpackConfig);
console.log(webpackConfig);
browserSync.init({
  port: process.env.PORT || 4000,
  ghostMode: false,
  server: {
    baseDir: "src",
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
        noInfo: true,
        historyApiFallback: true
      }),
      webpackHotMiddleware(bundler),
      historyApiFallback({
        index: "/index.html",
        verbose: true
      })
    ]
  },
  files: ["src/*.html"]
});
