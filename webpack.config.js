/* eslint @typescript-eslint/no-var-requires: 0 */
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const src = path.resolve(__dirname, "src");

/**
 * Creates the dist that's published to NPM.
 */
module.exports = {
  output: {
    libraryTarget: "commonjs2"
  },
  cache: false,
  mode: "production",
  optimization: {
    // Packages on NPM shouldn't be minimized.
    minimize: false,
    // Several options to make the generated code a little easier to read (for debugging).
    chunkIds: "named",
    moduleIds: "named",
    mangleExports: false
  },
  target: "browserslist",
  entry: "./src/index.ts",
  plugins: [],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      // Remember to keep in sync with `tsconfig.json`
      "@bytescale/upload-widget-react": path.resolve(__dirname, "src")
    }
  },
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader" // Options are in 'babel.config.js'
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.build.json"
            }
          }
        ],
        include: [src]
      }
    ]
  }
};
