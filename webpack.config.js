const path = require('path');

module.exports = {
  entry: {
    index: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public/scripts'), // Outputs to public/scripts directory
    filename: '[name]-bundle.js',  // Dynamic filename based on entry name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    devMiddleware: {
      publicPath: '/scripts/',
    },
    compress: true,
    port: 9001, // Change to a different port number
    open: true,
  },
  
  devtool: 'source-map',
  mode: 'development',
};
