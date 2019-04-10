module.exports = ({ env, file, options }) => ({
  plugins: {
    'postcss-import': { root: file.dirname },
    'postcss-preset-env': {
      stage: 2,
      autoprefixer: {
        grid: true,
      },
    },
    'postcss-browser-reporter': {},
    'postcss-reporter': {},
  },
});
