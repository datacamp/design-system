const webpack = require('webpack')

module.exports = {
  webpack: (config, { paths, dev, framework }) => {
    // Modify config ...
    // config.module.rules[0].oneOf.unshift({
    //   test: /icons\/(.)*\.svg$/,
    //   loader: 'svg-inline-loader'
    // });

    return config;
  }
}
