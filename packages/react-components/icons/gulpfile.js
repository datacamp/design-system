/* eslint-disable no-param-reassign */
const { src, dest, series, parallel } = require('gulp');
const rename = require('gulp-rename');
const merge = require('merge-stream');
const svgr = require('@svgr/core').default;
const transform = require('gulp-transform');
const camelcase = require('camelcase');
const concatFilenames = require('gulp-concat-filenames');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const svgSprite = require('gulp-svg-sprite');
const zip = require('gulp-zip');
const svgoConfig = require('./svgorc.json');
const sharp = require('sharp');

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

const commonSVGRConfig = {
  dimensions: false,
  expandProps: false,
  plugins: [
    '@svgr/plugin-svgo',
    '@svgr/plugin-jsx',
    '@svgr/plugin-prettier',
    // '@svgr/babel-plugin-svg-dynamic-title',
  ],
  prettier: true,
  replaceAttrValues: { '#3AC': '{color}' },
  svgoConfig,
};

function buildTypescriptWebComponents() {
  return loadAllSVGs()
    .pipe(
      transform('utf8', (content, file) => {
        const componentName = generateComponentName(file.basename);

        return svgr(content, {
          ...commonSVGRConfig,
          svgProps: {
            'aria-hidden': '{ariaHidden}',
            className: '{className}',
            height: '{size}',
            ref: '{ref}',
            role: 'img',
            width: '{size}',
          },
          template({ template }, opts, { jsx }) {
            const typescriptTemplate = template.smart({
              plugins: ['typescript'],
            });
            return typescriptTemplate.ast`
            import * as React from 'react';

            interface IconProps {
              'aria-hidden'?: boolean;
              className?: string;
              color?: string;
              size?: 12 | 18 | 24;
              title?: string;
            }
            const ${componentName} = React.forwardRef(
              (
                {
                  'aria-hidden': ariaHidden = false,
                  className,
                  color = 'currentColor',
                  size = 18,
                  title,
                }: IconProps,
                ref: React.Ref<SVGSVGElement>
              ) => ${jsx})
              export default ${componentName};
            `;
          },
          titleProp: true,
        });
      })
    )
    .pipe(
      rename(path => {
        path.basename = generateComponentName(
          `${path.basename}${path.extname}`
        );
        path.extname = '.tsx';
      })
    )
    .pipe(dest('./build/web'));
}

function buildTypescriptMobileComponents() {
  return loadAllSVGs()
    .pipe(
      transform('utf8', (content, file) => {
        const componentName = generateComponentName(file.basename);

        return svgr(content, {
          ...commonSVGRConfig,
          native: true,
          svgProps: {
            height: '{size}',
            style: '{style}',
            width: '{size}',
          },
          template({ template }, opts, { jsx }) {
            const typescriptTemplate = template.smart({
              plugins: ['typescript'],
            });
            return typescriptTemplate.ast`
              import * as React from 'react';
              import { StyleProp, ViewStyle } from 'react-native';
              import Svg, { Path } from 'react-native-svg';

              interface IconProps {
                color?: string,
                size?: number,
                style?: StyleProp<ViewStyle>
              }

              const ${componentName} = ({size = 18, color = 'currentColor', style}: IconProps) => ${jsx};
              export default ${componentName};
            `;
          },
        });
      })
    )
    .pipe(
      rename(path => {
        path.basename = generateComponentName(
          `${path.basename}${path.extname}`
        );
        path.extname = '.tsx';
      })
    )
    .pipe(dest('./build/mobile'));
}

function generateWebIndexFile() {
  return src('./build/web/*.tsx')
    .pipe(
      concatFilenames('index.ts', {
        root: './build/web',
        template: fileName => {
          const componentName = generateComponentName(fileName);
          return `export { default as ${componentName}Icon } from './${componentName}';`;
        },
      })
    )
    .pipe(dest('./build/web/'));
}

function generateMobileIndexFile() {
  return src('./build/mobile/*.tsx')
    .pipe(
      concatFilenames('index.ts', {
        root: './build/mobile',
        template: fileName => {
          const componentName = generateComponentName(fileName);
          return `export { default as ${componentName}Icon } from './${componentName}';`;
        },
      })
    )
    .pipe(dest('./build/mobile/'));
}

const generateTypescriptWeb = series(
  buildTypescriptWebComponents,
  generateWebIndexFile
);

const generateTypescriptMobile = series(
  buildTypescriptMobileComponents,
  generateMobileIndexFile
);

function transpileToJS() {
  return src('./build/**')
    .pipe(babel({ configFile: './babel7.config.js', envName: 'cjs' }))
    .pipe(dest('./lib'));
}
function transpileToES() {
  return src('./build/**')
    .pipe(babel({ configFile: './babel7.config.js', envName: 'es' }))
    .pipe(dest('./es'));
}

function createTypings() {
  const tsProject = ts.createProject('tsconfig.json');
  const tsResult = src('./build/**').pipe(tsProject());
  return tsResult.dts.pipe(dest('./lib')).pipe(dest('./es'));
}

const transpileTypescript = parallel(
  transpileToJS,
  transpileToES,
  createTypings
);

function generateSprites() {
  return loadAllSVGs()
    .pipe(
      svgSprite({
        mode: {
          css: true, // Create a «css» sprite
          defs: true, // Create a «view» sprite
          stack: true, // Create a «defs» sprite
          symbol: true, // Create a «symbol» sprite
          view: true, // Create a «stack» sprite
        },
        shape: { transform: ['svgo'] },
        svg: {
          transform: [
            svg => {
              return svg.replace(/#3AC/g, 'currentColor');
            },
          ],
        },
      })
    )
    .pipe(dest('./sprites'));
}

function loadResizedColorSVGs({ color, suffix }) {
  return loadAllSVGs()
    .pipe(
      transform('utf8', content =>
        content
          .replace(/#3AC/g, color)
          .replace('width="18" height="18"', 'width="512" height="512"')
      )
    )
    .pipe(
      rename(path => {
        path.dirname += `/${path.basename}`;
        path.basename += suffix;
      })
    );
}

function generatePNG() {
  return merge([
    loadResizedColorSVGs({ color: '#33aacc', suffix: '-primary' }),
    loadResizedColorSVGs({ color: '#ffffff', suffix: '-white' }),
    loadResizedColorSVGs({ color: '#3d4251', suffix: '-darkGrey' }),
  ])
    .pipe(
      transform(content =>
        sharp(content)
          .png()
          .toBuffer()
      )
    )
    .pipe(rename({ extname: '.png' }));
}

function generateZip() {
  return merge([
    loadAllSVGs().pipe(
      rename(path => {
        path.dirname += `/${path.basename}`;
      })
    ),
    generatePNG(),
  ])
    .pipe(zip('icons.zip'))
    .pipe(dest('./zip'));
}

exports.build = parallel(
  generateSprites,
  generateZip,
  series(
    parallel(generateTypescriptWeb, generateTypescriptMobile),
    transpileTypescript
  )
);
