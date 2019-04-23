module.exports = {
    entry: './app/password-checker.js',
    mode: 'development',
    module: {
      rules: [
          {
              test: /worker\.js$/,
              use: {loader: 'worker-loader'},
          }
      ]
    },
    output: {
        filename: './bundle.js'
    }
};