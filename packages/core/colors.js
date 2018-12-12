import _ from 'lodash';

const COLORS = {
  green: {
    color: '#36d57d',
    contrastColor: '#fff',
  },
  greenLight: {
    color: '#a5ecc5',
    contrastColor: '#fff',
  },
  geyser: {
    color: '#cfdce1',
    contrastColor: '#3d4251',
  },
  grey: {
    color: '#4d5356',
    contrastColor: '#fff',
  },
  greyDark: {
    color: '#3d4251',
    contrastColor: '#fff',
  },
  greyLight: {
    color: '#d1d3d8',
    contrastColor: '#3d4251',
  },
  greyLighter: {
    color: '#e6eaeb',
    contrastColor: '#3d4251',
  },
  greyOslo: {
    color: '#859094',
    contrastColor: '#3d4251',
  },
  orange: {
    color: '#ff9400',
    contrastColor: '#fff',
  },
  orangeDark: {
    color: '#ad662c',
    contrastColor: '#fff',
  },
  porcelain: {
    color: '#f0f4f5',
    contrastColor: '#3d4251',
  },
  primary: {
    color: '#3ac',
    contrastColor: '#fff',
  },
  primaryDark: {
    color: '#263e63',
    contrastColor: '#fff',
  },
  primaryDarker: {
    color: '#14243e',
    contrastColor: '#fff',
  },
  primaryDarkest: {
    color: '#0c1626',
    contrastColor: '#fff',
  },
  primaryLight: {
    color: '#7ecce2',
    contrastColor: '#fff',
  },
  primaryLighter: {
    color: '#d5eaef',
    contrastColor: '#3d4251',
  },
  primaryLightest: {
    color: '#ebf4f7',
    contrastColor: '#3d4251',
  },
  purple: {
    color: '#8468c4',
    contrastColor: '#fff',
  },
  purpleDark: {
    color: '#5d488c',
    contrastColor: '#fff',
  },
  purpleLight: {
    color: '#a786f3',
    contrastColor: '#fff',
  },
  raven: {
    color: '#737a80',
    contrastColor: '#fff',
  },
  red: {
    color: '#fe5c5c',
    contrastColor: '#fff',
  },
  redLight: {
    color: '#ffb5b5',
    contrastColor: '#fff',
  },
  secondary: {
    color: '#ffc844',
    contrastColor: '#fff',
  },
  secondaryLight: {
    color: '#fbe28d',
    contrastColor: '#fff',
  },
  white: {
    color: '#fff',
    contrastColor: '#3d4251',
  },
  whiteTransparent: {
    color: 'rgba(255,255,255, 0.2)',
    contrastColor: '#3d4251',
  },
};

const checkValidColors = color => {
  const regex = /([a-z]\w+-[a-z]\w+)/g;

  if (regex.exec(color) !== null) {
    // eslint-disable-next-line no-console
    console.error(
      `Deprecated color name: ${color}, please use the camelCase version of this color.`
    );
  }
};

const getColor = color => {
  checkValidColors(color);

  if (color === 'transparent') {
    return 'transparent';
  }
  if (color === 'currentColor') {
    return 'currentColor';
  }
  return _.get(COLORS, `${color}.color`, '');
};
getColor.validColors = [...Object.keys(COLORS), 'transparent', 'currentColor'];

const getContrastColor = color => {
  checkValidColors(color);
  if (color === 'transparent') {
    return null;
  }
  if (color === 'currentColor') {
    return null;
  }
  return _.get(COLORS, `${color}.contrastColor`, '');
};
getContrastColor.validColors = Object.keys(COLORS);

export { getColor, getContrastColor };
