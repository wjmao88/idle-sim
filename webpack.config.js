module.exports = {
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel'
    }]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
};