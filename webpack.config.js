module.exports = {
  entry: "./src/main.ts",
  output: {filename: "app.js"},
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css",
      }, {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },
};
