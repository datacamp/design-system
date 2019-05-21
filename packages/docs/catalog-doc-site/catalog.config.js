const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassJsonImporter = require('node-sass-json-importer');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const modulesPath = path.resolve(__dirname);

module.exports = {
  webpack: (config, { dev }) => {
    const extractSCSS = new ExtractTextPlugin({
      filename: 'static/[name].[contenthash:8].css',
      disable: dev,
    });

    config.module.rules[0].oneOf.unshift({
      test: [/\.svg$/],
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    });

    config.module.rules[0].oneOf.unshift({
      test: /\.scss$/,
      use: extractSCSS.extract({
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
        fallback: 'style-loader',
      }),
      include: modulesPath,
    });

    config.module.rules[0].oneOf.unshift({
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules\?!(buble)/,
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
