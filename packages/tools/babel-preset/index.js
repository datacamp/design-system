const presetEnv = require('@babel/preset-env').default;
const presetReact = require('@babel/preset-react').default;
const presetTypescript = require('@babel/preset-typescript').default;
const presetCSSProp = require('@emotion/babel-preset-css-prop').default;
const pluginLodash = require('babel-plugin-lodash');
const pluginTypescriptToProptypes = require('babel-plugin-typescript-to-proptypes')
  .default;
const pluginTransformRuntime = require('@babel/plugin-transform-runtime');

const targets = {
  browsers: ['last 2 versions', 'Firefox ESR', 'not IE < 11'],
};

module.exports = () => ({
  env: {
    cjs: {
      presets: [
        [
          presetEnv,
          {
            modules: 'cjs',
            targets,
          },
        ],
      ],
    },
    es: {
      presets: [
        [
          presetEnv,
          {
            modules: false,
            targets,
          },
        ],
      ],
    },
  },
  plugins: [pluginLodash, pluginTypescriptToProptypes, pluginTransformRuntime],
  presets: [[presetEnv], presetReact, presetTypescript, presetCSSProp],
});
