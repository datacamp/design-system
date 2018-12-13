const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const modulesPath = path.resolve(__dirname);

module.exports = {
  webpack: (config, { paths, dev, framework }) => {
    const extractSCSS = new ExtractTextPlugin({
      filename: 'static/[name].[contenthash:8].css',
      disable: dev,
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
              includePaths: [modulesPath],
              sourceMap: !dev,
            },
          },
        ],
        fallback: 'style-loader',
      }),
      include: modulesPath,
    });

    config.plugins.push(extractSCSS);

    return config;
  },
};
