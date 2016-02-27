import extractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  cache: true,
  entry: './src/index',
  output: {
    filename: 'dist/js/browser-bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ],
  },
};
