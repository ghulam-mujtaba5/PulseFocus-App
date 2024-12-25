// // // const path = require('path');
// // // const HtmlWebpackPlugin = require('html-webpack-plugin');

// // // module.exports = {
// // //   mode: 'development',
// // //   entry: './src/frontend/index.js', // Adjust to your entry point
// // //   output: {
// // //     filename: 'bundle.js',
// // //     path: path.resolve(__dirname, 'dist'),
// // //   },
// // //   module: {
// // //     rules: [
// // //       {
// // //         test: /\.js$/,
// // //         exclude: /node_modules/,
// // //         use: 'babel-loader',
// // //       },
// // //       {
// // //         test: /\.css$/, // This rule will handle CSS files
// // //         use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
// // //       },
// // //     ],
// // //   },
// // //   plugins: [
// // //     new HtmlWebpackPlugin({
// // //       template: './public/index.html', // Path to your HTML template
// // //     }),
// // //   ],
// // //   devServer: {
// // //     static: {
// // //       directory: path.join(__dirname, 'dist'),
// // //     },
// // //     compress: true,
// // //     port: 3001,
// // //     open: false,
// // //   },
// // // };
// // const path = require('path');
// // const HtmlWebpackPlugin = require('html-webpack-plugin');

// // module.exports = {
// //   mode: 'development',
// //   entry: './src/frontend/index.js', // Adjust to your entry point
// //   output: {
// //     filename: 'bundle.js',
// //     path: path.resolve(__dirname, 'dist'),
// //   },
// //   resolve: {
// //     extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Automatically resolve these extensions
// //   },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.js$/,
// //         exclude: /node_modules/,
// //         use: 'babel-loader',
// //       },
// //       {
// //         test: /\.css$/, // This rule will handle CSS files
// //         use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
// //       },
// //     ],
// //   },
// //   plugins: [
// //     new HtmlWebpackPlugin({
// //       template: './public/index.html', // Path to your HTML template
// //     }),
// //   ],
// //   devServer: {
// //     static: {
// //       directory: path.join(__dirname, 'dist'),
// //     },
// //     compress: true,
// //     port: 3001,
// //     open: false,
// //   },
// // };

// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// // Use import.meta.url to get the equivalent of __dirname
// const __dirname = new URL('.', import.meta.url).pathname;

// export default {
//   mode: 'development',
//   entry: './src/frontend/index.js', // Adjust to your entry point
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Automatically resolve these extensions
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//       {
//         test: /\.css$/, // This rule will handle CSS files
//         use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html', // Path to your HTML template
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'dist'),
//     },
//     compress: true,
//     port: 3001,
//     open: false,
//   },
// };


//webpack.config.js
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

// Correctly resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './src/frontend/index.js', // Adjust to your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Correctly resolve the output path
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Automatically resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // This rule will handle CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/backend/index.html', // Path to your HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Correctly resolve the static directory
    },
    compress: true,
    port: 3001,
    open: false,
  },
};
