const presetEnv = require('@babel/preset-env').default;
const presetReact = require('@babel/preset-react').default;
const presetTypescript = require('@babel/preset-typescript').default;
const presetCSSProp = require('@emotion/babel-preset-css-prop').default;
const pluginLodash = require('babel-plugin-lodash');
const pluginTypescriptToProptypes = require('babel-plugin-typescript-to-proptypes')
  .default;

module.exports = () => ({
  plugins: [pluginLodash, pluginTypescriptToProptypes],
  presets: [
    [
      presetEnv,
      {
        targets: {
          browsers: ['last 2 versions', 'Firefox ESR', 'not IE < 11'],
        },
      },
    ],
    presetReact,
    presetTypescript,
    presetCSSProp,
  ],
});
