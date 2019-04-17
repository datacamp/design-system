module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'Firefox ESR', 'not IE < 11'],
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['lodash'],
};
