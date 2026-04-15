/* eslint @typescript-eslint/no-var-requires: 0 */
const baseConfig = require("./webpack.config");
const path = require("path");

const port = 3060;

module.exports = {
  ...baseConfig,
  entry: "./src/dev/index.tsx",
  target: "web",
  externals: [],
  cache: true,
  mode: "development",
  plugins: [...baseConfig.plugins],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src/dev")
    },
    hot: false,
    liveReload: true,
    open: true,
    port
  }
};
