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
  const sortedData = _.sortBy(
    Object.entries(object).map(([key, data]) => ({ data, key })),
    'data.attributes.scssSortValue'
  );
  return _.reduce(
    sortedData,
    (result, { data, key }) => {
      const variableName = keyTransform(key, data);
      return `${result}$dc-${prefix}${
        prefix === '' ? '' : '-'
      }${variableName}: ${valueTransform(data, key)};\n`;
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
    keyTransform: (key, data) => data.attributes.legacyName || key,
    prefix: 'font-size',
    valueTransform: ({ value }) => (_.isString(value) ? value : `${value}rem`),
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
    keyTransform: transformBreakpointKey,
    prefix: 'bp',
  });
  const breakpointsBelow = generateVariables(properties.breakpoints, {
    keyTransform: key => {
      const parsedKey = _.kebabCase(key);
      return parsedKey.replace(/([1-9]+)-k$/, '$1k');
    },
    prefix: 'bp-below',
    valueTransform: prop => prop.attributes.below,
  });

  const breakpointMaps = [
    `$dc-breakpoints: (\n${_(properties.breakpoints)
      .sortBy('attributes.scssSortValue')
      .pickBy(prop => !prop.attributes.hd)
      .reduce(
        (result, { attributes: { type: key } }) =>
          `${result}  '${transformBreakpointKey(
            key
          )}': $dc-bp-${transformBreakpointKey(key)},\n`,
        ''
      )});`,
    `$dc-breakpoints-hd: (\n${_(properties.breakpoints)
      .sortBy('attributes.scssSortValue')
      .pickBy(prop => prop.attributes.hd)
      .reduce(
        (result, { attributes: { type: key } }) =>
          `${result}  '${transformBreakpointKey(
            key
          )}': $dc-bp-${transformBreakpointKey(key)},\n`,
        ''
      )});`,
    '$dc-breakpoints-all: map-merge($dc-breakpoints, $dc-breakpoints-hd);',
    `$dc-breakpoints-below: (\n${_(properties.breakpoints)
      .sortBy('attributes.scssSortValue')
      .pickBy(prop => !prop.attributes.hd)
      .reduce(
        (result, { attributes: { type: key } }) =>
          `${result}  '${transformBreakpointKey(
            key
          )}': $dc-bp-below-${transformBreakpointKey(key)},\n`,
        ''
      )});`,
    `$dc-breakpoints-below-hd: (\n${_(properties.breakpoints)
      .sortBy('attributes.scssSortValue')
      .pickBy(prop => prop.attributes.hd)
      .reduce(
        (result, { attributes: { type: key } }) =>
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
