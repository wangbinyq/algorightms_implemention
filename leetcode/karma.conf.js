module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    autoWatch: true,
    files: [
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      },
      devtool: 'inline-source-map'
    },
    reporters: ['mocha'],
    browsers: ['PhantomJS']
  })
}
