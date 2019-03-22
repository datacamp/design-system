const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassJsonImporter = require('node-sass-json-importer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const dev = nodeEnv === 'production';
const outputDir = 'lib';

const tokens = require('./tokens.json');

const tokenizeSCSS = scss => {
  let tokenized = scss.toString();

  for (const firstKey of Object.keys(tokens)) {
    if (typeof tokens[firstKey] === 'string') {
      const re = new RegExp(`/map_get\\(\\$${firstKey}\\)`, 'g');
      tokenized = tokenized.replace(re, tokens[firstKey]);
    } else if (typeof tokens[firstKey] === 'object') {
      for (const secondKey of Object.keys(tokens[firstKey])) {
        let value = tokens[firstKey][secondKey];

        // if (value.charAt(0) === "'" && value.charAt(value.length - 1) === "'") {
        //   value = value.slice(1, -1);
        // }

        const re = new RegExp(
          `map_get\\(\\$${firstKey}, ${secondKey}\\)`,
          'gi'
        );

        tokenized = tokenized.replace(re, value);
      }
    }
  }

  return tokenized;
};

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, `./${outputDir}`),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'shared'],
  },
  devtool: dev ? 'cheap-module-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
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
                config: {},
                sourceMap: !dev,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                importer: sassJsonImporter(),
                sourceMap: !dev,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'css/waffles.[contenthash:8].css',
      allChunks: true,
    }),

    new SVGSpritemapPlugin({
      src: 'icons/svgs/*.svg',
      filename: 'icons/symbols.svg',
      prefix: '',
      svgo: {
        js2svg: {
          pretty: true,
        },
        plugins: [{
          removeTitle: true,
          removeAttrs: {
            attrs: 'fill'
          }
        }]
      }
    }),

    new CopyWebpackPlugin(
      [
        // Copy source SCSS files (except ingredients and variables) to package
        {
          from: 'scss/**/*',
          ignore: ['ingredients.scss', 'variables.scss']
        },
        // Copy ingredients SCSS to package and replace tokens import
        {
          from: 'scss/ingredients.scss',
          to: 'scss',
          transform(content) {
            return content.toString().replace("@import '../tokens.json';", '');
          },
        },
        // Copy variables SCSS to package and tokenize values
        {
          from: 'scss/design/variables.scss',
          to: 'scss/design',
          transform(content) {
            return tokenizeSCSS(content);
          },
        },
        // Copy raw svg icons to package
        'icons/**/*',
        // copy all raw js to package
        'js/**/*',
        // copy tokens.json to package
        'tokens.json',
      ],
      {
        ignore: ['**/.*'],
      }
    ),
  ],
};
