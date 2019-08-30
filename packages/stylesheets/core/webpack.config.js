const path = require('path');
const sassJsonImporter = require('node-sass-json-importer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const dev = nodeEnv === 'production';
const outputDir = 'lib';

module.exports = {
  devtool: dev ? 'cheap-module-source-map' : 'source-map',
  entry: './scss/ingredients.scss',
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
              outputStyle: 'expanded',
              sourceMap: !dev,
            },
          },
        ],
      },
    ],
  },

  output: {
    filename: 'ingredients.scss',
    path: path.join(__dirname, `./${outputDir}`),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/waffles.[contenthash:8].css',
    }),

    new SVGSpritemapPlugin('icons/svgs/*.svg', {
      output: {
        filename: 'icons/symbols.svg',
        svgo: {
          js2svg: {
            pretty: true,
          },
          plugins: [
            {
              removeAttrs: {
                attrs: 'fill',
              },
              removeTitle: true,
            },
          ],
        },
      },
      sprite: { prefix: false },
    }),

    new CopyWebpackPlugin(
      [
        // Copy source SCSS files (except ingredients) to package
        {
          from: 'scss/**/*',
          ignore: ['ingredients.scss'],
        },
        // Copy ingredients SCSS to package and replace variables import
        {
          from: 'scss/ingredients.scss',
          to: 'scss',
          transform(content) {
            return content
              .toString()
              .replace(
                "@import '~@datacamp/waffles-tokens/lib/variables.scss';",
                "@import 'design/variables.scss';"
              );
          },
        },
        // Copy variables SCSS to package from waffles-tokens
        {
          from: 'node_modules/@datacamp/waffles-tokens/lib/variables.scss',
          to: 'scss/design',
        },
        // Copy raw svg icons to package
        'icons/**/*',
        // copy tokens.json to package from waffles-tokens
        {
          from: 'node_modules/@datacamp/waffles-tokens/lib/core-tokens.json',
          to: 'tokens.json',
        },
      ],
      {
        ignore: ['**/.*'],
      }
    ),

    // remove webpack artifact
    new RemovePlugin({
      after: {
        include: ['ingredients.scss'],
        root: 'lib',
      },
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'shared'],
    symlinks: true,
  },
};
