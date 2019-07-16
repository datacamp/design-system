const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = async ({ config, mode }) => {
  const dev = mode === 'DEVELOPMENT';

  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: dev ? 'server' : 'static',
      openAnalyzer: dev,
    })
  );
  return config;
};
