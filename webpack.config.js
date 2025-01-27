const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'resources/img', to: 'img' },
          { from: 'resources/blogs', to: 'blogs' },
          { from: 'manifest.json', to: '' },
          { from: 'service_worker.js', to: '' }
        ]
      })
    ],
    mode: 'development',
    devServer: {
      historyApiFallback: true, // Redirect all 404s to index.html
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 8080,
      hot: true,
    }
  }
};
