const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const rules = {
  jsx: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  css: {
    test: /\.css/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }
    ]
  },
  favicon: {
    test: /favicon\.ico$/,
    loader: 'url-loader',
    query: {
      limit: 1,
      name: 'icon/[name].[ext]'
    }
  },
  assets: {
    use: [{
      loader: 'url-loader',
      options: {
        limit: 8000, // Convert images < 8kb to base64 strings
        name: 'images/[hash]-[name].[ext]'
      }
    }],
    test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf)(\?.*$|$)/
  }
}

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const splitChunksPlugin = new webpack.optimize.SplitChunksPlugin({
  chunks: "async",
  minSize: 30000,
  minChunks: 1,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  automaticNameDelimiter: '~',
  name: true,
  cacheGroups: {
    vendors: {
      test: /[\\/]node_modules[\\/]/,
      priority: -10
    },
    default: {
      minChunks: 2,
      priority: -20,
      reuseExistingChunk: true
    }
  }
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [rules.jsx, rules.css, rules.favicon, rules.assets]
  },
  plugins: [htmlPlugin, splitChunksPlugin]
}

