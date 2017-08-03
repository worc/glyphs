const path = require("path");

module.exports = [
  {
    name: "browser",
    entry: path.resolve(__dirname, "client/index.js"),
    target: "web", // fixes "cannot resolve 'fs'" error

    output: {
      path: path.resolve(__dirname),
      filename: "dist/client.js"
    },

    resolve: {
      modules: ["client", "shared", "node_modules"]
    },

    // externals: {
    //   fs: "fs",
    //   canvas: "canvas"
    // },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        }
      ]
    },
  }, {
    name: "server",
    entry: "./server.jsx",
    target: "node",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "server.js"
    },

    resolve: {
      modules: ["client", "shared", "node_modules"]
    },

    // externals: {
    //   fs: "fs",
    //   canvas: "canvas"
    // },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
        }
      ]
    },
  }
];
