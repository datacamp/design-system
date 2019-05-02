const { src, dest, series, parallel } = require('gulp');
const rename = require('gulp-rename');
const merge = require('merge-stream');
const svgr = require('@svgr/core').default;
const transform = require('gulp-transform');
const camelcase = require('camelcase');
const concatFilenames = require('gulp-concat-filenames');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const filter = require('gulp-filter');
const svgSprite = require('gulp-svg-sprite');
const zip = require('gulp-zip');

function loadAllSVGs() {
  return merge(
    src('./invertedIcons/*.svg').pipe(rename({ suffix: '-inverted' })),
    src('./brandIcons/*.svg').pipe(rename({ suffix: '-brand' })),
    src('./standardIcons/*.svg')
  );
}

function generateComponentName(fileName) {
  return camelcase(fileName.slice(0, fileName.indexOf('.')), {
    pascalCase: true,
  });
}

function buildTypescriptComponents() {
  return loadAllSVGs()
    .pipe(
      transform('utf8', (content, file) => {
        const componentName = generateComponentName(file.basename);

        return svgr(content, {
          plugins: [
            '@svgr/plugin-svgo',
            '@svgr/plugin-jsx',
            '@svgr/plugin-prettier',
          ],
          dimensions: false,
          expandProps: false,
          prettier: true,
          svgProps: {
            width: '{size}',
            height: '{size}',
            className: '{className}',
          },
          replaceAttrValues: { '#3AC': '{color}' },
          template({ template }, opts, { jsx }) {
            const typescriptTemplate = template.smart({
              plugins: ['typescript'],
            });
            return typescriptTemplate.ast`
              import * as React from 'react';

              interface IconProps {
                size?: 12 | 18 | 24,
                className?: string,
                color?: string
              }

              const ${componentName} = ({size = 18, className, color = 'currentColor'}: IconProps) => ${jsx};
              export default ${componentName};
            `;
          },
        });
      })
    )
    .pipe(
      /* eslint-disable no-param-reassign  */
      rename(path => {
        path.basename = generateComponentName(
          `${path.basename}${path.extname}`
        );
        path.extname = '.tsx';
      })
      /* eslint-enable no-param-reassign  */
    )
    .pipe(dest('./build'));
}

function generateIndexFile() {
  return src('./build/*.tsx')
    .pipe(
      concatFilenames('index.ts', {
        root: './build',
        template: fileName => {
          const componentName = generateComponentName(fileName);
          return `export { default as ${componentName}Icon } from './${componentName}';`;
        },
      })
    )
    .pipe(dest('./build/'));
}

const generateTypescript = series(buildTypescriptComponents, generateIndexFile);

function transpileToJS() {
  return src('./build/*')
    .pipe(babel({ configFile: './babel7.config.js' }))
    .pipe(dest('./lib'));
}

function createTypings() {
  const tsProject = ts.createProject('tsconfig.json');
  return src('./build/*')
    .pipe(tsProject())
    .pipe(filter('**/*.d.ts'))
    .pipe(dest('./lib'));
}

const transpileTypescript = parallel(transpileToJS, createTypings);

function generateSprites() {
  return loadAllSVGs()
    .pipe(
      svgSprite({
        shape: { transform: ['svgo'] },
        svg: {
          transform: [
            svg => {
              return svg.replace(/#3AC/g, 'currentColor');
            },
          ],
        },
        mode: {
          css: true, // Create a «css» sprite
          view: true, // Create a «view» sprite
          defs: true, // Create a «defs» sprite
          symbol: true, // Create a «symbol» sprite
          stack: true, // Create a «stack» sprite
        },
      })
    )
    .pipe(dest('./sprites'));
}

function generateZip() {
  return loadAllSVGs()
    .pipe(zip('icons.zip'))
    .pipe(dest('./zip'));
}

exports.build = parallel(
  generateSprites,
  generateZip,
  series(generateTypescript, transpileTypescript)
);
