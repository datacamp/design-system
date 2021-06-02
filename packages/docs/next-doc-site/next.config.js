// eslint-disable-next-line filenames/match-exported
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  future: {
    webpack5: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.fallback.fs = false;
    }

    return config;
  },
});
