const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    libraryTarget: "system",
    filename: "openmrs-esm-refapp-styleguide.js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(woff2|woff|ttf|eot|svg)?$/,
        use: ["file-loader"]
      },
      {
        test: /\.(html)$/,
        use: ["raw-loader"]
      }
    ]
  },
  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "openmrs-esm-refapp-styleguide.css" })
  ]
};
