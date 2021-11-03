const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        static: true
    },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ], 
}