const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,    
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.html$/,
        use:
          {
            loader: "html-loader",
          }
      },
      {
				test: /\.s[ca]ss$/i,
				use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},

        ]
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
      {
        test: /\.png|jpe?g|gif?/i,
        use: 'file-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ]
};