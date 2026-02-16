// import path from "path"
const path=require('path');
module.exports={
    mode:'production',
    entry:'./src/main.js',
    output:{
        filename:'main.js',
        path:path.resolve('./','public/')
    },
      module: {
    rules: [
      {
        // Test for both .js and .jsx files
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Exclude node_modules from transpilation
        use: {
          loader: 'babel-loader', // Use babel-loader
          // Options can also be specified here instead of in a .babelrc file
        },
      },
      {
        test: /\.css$/,
        // exclude:"/node_modules/",
        use:[
          'style-loader','css-loader'
    ]
      }
      // You can add other rules here for CSS, images, etc.
    ],
  },
  resolve: {
    // This allows you to import files without specifying the extension
    extensions: ['.js', '.jsx','.css'],
  },
  devServer:{
    static:'./public',
    port:8000
  }
}