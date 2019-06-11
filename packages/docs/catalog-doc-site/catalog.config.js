const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassJsonImporter = require('node-sass-json-importer');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const modulesPath = path.resolve(__dirname);

module.exports = {
  webpack: (config, { dev }) => {
    const extractSCSS = new ExtractTextPlugin({
      disable: dev,
      filename: 'static/[name].[contenthash:8].css',
    });

    config.module.rules[0].oneOf.unshift({
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
      test: [/\.svg$/],
    });

    config.module.rules[0].oneOf.unshift({
      include: modulesPath,
      test: /\.scss$/,
      use: extractSCSS.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: !dev,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !dev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              importer: sassJsonImporter(),
              includePaths: [modulesPath],
              sourceMap: !dev,
            },
          },
        ],
      }),
    });

    config.module.rules[0].oneOf.unshift({
      exclude: /node_modules\?!(buble)/,
      test: /\.js$/,
      use: 'babel-loader',
    });

    config.module.rules[0].oneOf.unshift({
      test: /\.zip$/,
      use: [
        {
          loader: 'file-loader',
          options: { name: '[name].[sha512:hash:base64:7].[ext]' },
        },
      ],
    });

    config.plugins.push(extractSCSS);
    config.plugins.push(new UglifyJSPlugin());

    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: dev ? 'server' : 'static',
        openAnalyzer: dev,
      })
    );

    return config;
  },
};
