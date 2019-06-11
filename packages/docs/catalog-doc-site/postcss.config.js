module.exports = ({ file }) => ({
  plugins: {
    'postcss-browser-reporter': {},
    'postcss-import': { root: file.dirname },
    'postcss-preset-env': {
      autoprefixer: {
        grid: true,
      },
      stage: 2,
    },
    'postcss-reporter': {},
  },
});
