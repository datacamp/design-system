import tokens from '@datacamp/waffles-tokens';
import _ from 'lodash';

const { colors } = tokens;

const COLORS = {
  geyser: {
    color: colors.geyser,
    contrastColor: colors.greyDark,
  },
  green: {
    color: colors.green,
    contrastColor: colors.white,
  },
  greenLight: {
    color: colors.greenLight,
    contrastColor: colors.white,
  },
  grey: {
    color: colors.grey,
    contrastColor: colors.white,
  },
  greyDark: {
    color: colors.greyDark,
    contrastColor: colors.white,
  },
  greyLight: {
    color: '#d1d3d8',
    contrastColor: colors.greyDark,
  },
  greyLighter: {
    color: colors.greyLighter,
    contrastColor: colors.greyDark,
  },
  greyOslo: {
    color: colors.greyOslo,
    contrastColor: colors.greyDark,
  },
  orange: {
    color: colors.orange,
    contrastColor: colors.white,
  },
  orangeDark: {
    color: colors.orangeDark,
    contrastColor: colors.white,
  },
  porcelain: {
    color: colors.porcelain,
    contrastColor: colors.greyDark,
  },
  primary: {
    color: colors.primary,
    contrastColor: colors.white,
  },
  primaryDark: {
    color: colors.primaryDark,
    contrastColor: colors.white,
  },
  primaryDarker: {
    color: colors.primaryDarker,
    contrastColor: colors.white,
  },
  primaryDarkest: {
    color: colors.primaryDarkest,
    contrastColor: colors.white,
  },
  primaryLight: {
    color: colors.primaryLight,
    contrastColor: colors.white,
  },
  primaryLighter: {
    color: colors.primaryLighter,
    contrastColor: colors.greyDark,
  },
  primaryLightest: {
    color: colors.primaryLightest,
    contrastColor: colors.greyDark,
  },
  purple: {
    color: colors.purple,
    contrastColor: colors.white,
  },
  purpleDark: {
    color: colors.purpleDark,
    contrastColor: colors.white,
  },
  purpleLight: {
    color: colors.purpleLight,
    contrastColor: colors.white,
  },
  raven: {
    color: colors.raven,
    contrastColor: colors.white,
  },
  red: {
    color: colors.red,
    contrastColor: colors.white,
  },
  redLight: {
    color: colors.redLight,
    contrastColor: colors.white,
  },
  secondary: {
    color: colors.secondary,
    contrastColor: colors.white,
  },
  secondaryLight: {
    color: colors.secondaryLight,
    contrastColor: colors.greyDark,
  },
  white: {
    color: colors.white,
    contrastColor: colors.greyDark,
  },
};

const checkValidColors = color => {
  const regex = /([a-z]\w+-[a-z]\w+)/g;

  if (regex.exec(color) !== null) {
    // eslint-disable-next-line no-console
    console.error(
      `Deprecated color name: ${color}, please use the camelCase version of this color.`,
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
