module.exports = {
    entry: {
        index: './client/index.js'
    },
    output:{
        path: __dirname+ "/bin",
        filename: '[name].js'
    },
    module:{
        //loaders[]
    },
  resolve: {
    extensions: ['', '.js']
  }
}
