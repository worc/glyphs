const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "client/index.js"),

  target: "web", // fixes "cannot resolve 'fs'" error

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.js"
  },

  resolve: {
    modules: ["client", "shared", "node_modules"]
  },

  externals: {
    fs: "fs",
    canvas: "canvas"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
};
