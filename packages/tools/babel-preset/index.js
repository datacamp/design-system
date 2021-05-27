const presetEnv = require('@babel/preset-env').default;
const presetReact = require('@babel/preset-react').default;
const presetTypescript = require('@babel/preset-typescript').default;
const presetCSSProp = require('@emotion/babel-preset-css-prop').default;
const pluginTypescriptToProptypes = require('babel-plugin-typescript-to-proptypes')
  .default;
const pluginTransformRuntime = require('@babel/plugin-transform-runtime');
const pluginProposalClassProperties = require('@babel/plugin-proposal-class-properties');
const pluginTransformReactRemovePropTypes = require('babel-plugin-transform-react-remove-prop-types');

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
        presetCSSProp,
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
        presetCSSProp,
      ],
    },
    reactnative: { presets: [[presetEnv, { targets: { esmodules: true } }]] },
    test: { presets: [presetCSSProp] },
  },
  plugins: [
    pluginProposalClassProperties,
    pluginTypescriptToProptypes,
    [pluginTransformReactRemovePropTypes, { mode: 'wrap' }], // must happen after typescript to proptypes conversion
    pluginTransformRuntime,
  ],
  presets: [[presetEnv], presetReact, presetTypescript],
});
