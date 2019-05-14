const _ = require('lodash');
const extractValueArray = require('../helpers/extractValueArray');
const convertToColorString = require('../helpers/convertToColorString');

const generateVariables = (
  object,
  {
    prefix = '',
    keyTransform = _.kebabCase,
    valueTransform = prop => prop.value,
  } = {}
) => {
  return _.reduce(
    object,
    (result, prop, key) => {
      const variableName = keyTransform(key);
      return `${result}$dc-${prefix}${
        prefix === '' ? '' : '-'
      }${variableName}: ${valueTransform(prop, key)};\n`;
    },
    ''
  );
};

const transformBreakpointKey = key => {
  const parsedKey = _.kebabCase(key);
  return parsedKey.replace(/([1-9]+)-k$/, '$1k');
};

module.exports = ({ properties }) => {
  const spatial = [
    `$dc-multiplier: ${properties.size.spatial.multiplier.value};`,
    '// Spatial lists for generating utility classes',
    `$dc-spatial: ${extractValueArray(properties.size.spatial.size).join(
      ' '
    )};`,
    `$dc-spatial-common: ${extractValueArray(
      properties.size.spatial.commonSize
    ).join(' ')};`,
    `$dc-measure: ${extractValueArray(properties.size.spatial.measure).join(
      ' '
    )};`,
    `$dc-spatial-all: join(\n  $list1: $dc-spatial,\n  $list2: $dc-measure,\n);`,
    '// Percentages list for generating utility classes',
    `$dc-percentages: ${extractValueArray(
      properties.size.spatial.percentage
    ).join(' ')};`,
    `$dc-angles: ${extractValueArray(properties.size.spatial.angle).join(
      ' '
    )};`,
    `$dc-z-indexes: ${extractValueArray(properties.size.spatial.zIndex).join(
      ' '
    )};`,
  ].join('\n');

  const colorObject = {
    ...properties.color.opaque,
    ...properties.color.transparent,
  };

  const colors = generateVariables(colorObject, {
    valueTransform: ({ value }) => convertToColorString(value),
  });

  const colorMap = `$dc-colors: (\n${_.reduce(
    colorObject,
    (result, value, key) =>
      `${result}  '${_.kebabCase(key)}': $dc-${_.kebabCase(key)},\n`,
    "  'currentColor': currentColor,\n  'transparent': transparent,\n"
  )});`;

  const gradients = generateVariables(properties.gradient, {
    prefix: 'gradient',
  });

  const fontFamily = generateVariables(properties.asset.font, {
    prefix: 'font-family',
    valueTransform: ({ value, attributes }) =>
      `'${value}', ${attributes.fallback}`,
  });

  const fontSize = generateVariables(properties.size.font, {
    prefix: 'font-size',
    keyTransform: key => (/^h[1-9]$/.test(key) ? key : _.kebabCase(key)),
  });

  const fontWeight = generateVariables(properties.size.fontWeight, {
    prefix: 'font-weight',
  });

  const lineHeight = generateVariables(properties.size.lineHeight, {
    prefix: 'line-height',
  });

  const border = generateVariables(properties.size.border, {
    prefix: 'border',
  });

  const boxShadow = generateVariables(properties.boxShadow, {
    prefix: 'box-shadow',
  });

  const animation = generateVariables(properties.animation);
  const breakpoints = generateVariables(properties.breakpoints, {
    prefix: 'bp',
    keyTransform: transformBreakpointKey,
  });
  const breakpointsBelow = generateVariables(properties.breakpoints, {
    prefix: 'bp-below',
    keyTransform: key => {
      const parsedKey = _.kebabCase(key);
      return parsedKey.replace(/([1-9]+)-k$/, '$1k');
    },
    valueTransform: prop => prop.attributes.below,
  });

  const breakpointMaps = [
    `$dc-breakpoints: (\n${_.reduce(
      _.pickBy(properties.breakpoints, prop => !prop.attributes.hd),
      (result, value, key) =>
        `${result}  '${transformBreakpointKey(
          key
        )}': $dc-bp-${transformBreakpointKey(key)},\n`,
      ''
    )});`,
    `$dc-breakpoints-hd: (\n${_.reduce(
      _.pickBy(properties.breakpoints, prop => prop.attributes.hd),
      (result, value, key) =>
        `${result}  '${transformBreakpointKey(
          key
        )}': $dc-bp-${transformBreakpointKey(key)},\n`,
      ''
    )});`,
    '$dc-breakpoints-all: map-merge($dc-breakpoints, $dc-breakpoints-hd);',
    `$dc-breakpoints-below: (\n${_.reduce(
      _.pickBy(properties.breakpoints, prop => !prop.attributes.hd),
      (result, value, key) =>
        `${result}  '${transformBreakpointKey(
          key
        )}': $dc-bp-below-${transformBreakpointKey(key)},\n`,
      ''
    )});`,
    `$dc-breakpoints-below-hd: (\n${_.reduce(
      _.pickBy(properties.breakpoints, prop => prop.attributes.hd),
      (result, value, key) =>
        `${result}  '${transformBreakpointKey(
          key
        )}': $dc-bp-below-${transformBreakpointKey(key)},\n`,
      ''
    )});`,
    `$dc-breakpoints-below-all: map-merge($dc-breakpoints-below, $dc-breakpoints-below-hd);`,
  ].join('\n');

  return `
// *************************************
//
//   DC Globals
//   -> Variables created for re-use globally
//
// *************************************

/**
 * Global Sass variables, all namespaced within "dc-". Must be included before
 * any other partials and a critical path dependency for the styleguide.
 */

/** Spatial */

${spatial}

/** Color */
${colors}
// Color map
${colorMap}

/** Gradient */
${gradients}

/** Typography */

// Font family
${fontFamily}
// Font size
${fontSize}
// Font weight
${fontWeight}
// Line height
${lineHeight}

/** Border */
${border}

/** Box shadow */
${boxShadow}

/** Animation */
${animation}

/** Breakpoints */
${breakpoints}
${breakpointsBelow}

${breakpointMaps}

$dc-sides: (
  't': top,
  'r': right,
  'b': bottom,
  'l': left,
);
`;
};
