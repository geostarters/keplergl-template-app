

// avoid destructuring for older Node version support
const resolve = require('path').resolve;
const join = require('path').join;
const webpack = require('webpack');

const CONFIG = {
  // bundle app.js and everything it imports, recursively.
  entry: {
    app: resolve('./src/index.js')
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [join(__dirname, 'src')],
        exclude: [/node_modules/]
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  // to support browser history api and remove the '#' sign
  devServer: {
    historyApiFallback: true
  },

  // Optional: Enables reading mapbox and dropbox client token from environment variable
 /*
  plugins: [
    new webpack.EnvironmentPlugin([
      'MapboxAccessToken',
      'DropboxClientId',
      'MapboxExportToken',
      'CartoClientId'
    ])
  ]
  */
};

// This line enables bundling against src in this repo rather than installed deck.gl module
module.exports = env => {
  return env ? require('../webpack.config.local')(CONFIG, __dirname)(env) : CONFIG;
};
