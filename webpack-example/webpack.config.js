const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'Webpack Example App',
        header: 'Webpack Example',
        metaDesc: 'Webpack Example Description',
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
      })
  ],
  mode:'development',
  output:{
      clean:true
  },
  devServer:{
    static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open:true
  }
};  