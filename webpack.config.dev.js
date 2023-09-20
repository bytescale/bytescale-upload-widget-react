/* eslint @typescript-eslint/no-var-requires: 0 */
const baseConfig = require("./webpack.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3060;

module.exports = {
  ...baseConfig,
  entry: ["react-hot-loader/patch", "./src/dev/index.tsx"],
  target: "web", // Ideally we'd use "browserslist" from the base, but it stops HMR from working.
  resolve: {
    ...baseConfig.resolve,
    alias: {
      ...baseConfig.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    }
  },
  externals: [],
  cache: true,
  mode: "development",
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: "Bytescale Upload Widget (React)",
      template: path.resolve(__dirname, "src/dev/index.html"),
      filename: "index.html" // output file
    })
  ],
  devServer: {
    hot: true,
    open: true,
    port
  }
};
