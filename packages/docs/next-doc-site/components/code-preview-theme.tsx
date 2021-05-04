// eslint-disable-next-line filenames/match-exported
import { colors, fontFamily, fontSize } from '@datacamp/waffles-tokens';

const theme = {
  plain: {
    backgroundColor: 'transparent',
    color: colors.beige200,
    fontFamily: fontFamily.mono,
    fontSize: fontSize.h6,
    margin: 0,
  },
  styles: [
    {
      style: {
        color: colors.blueDark,
      },
      types: ['prolog'],
    },
    {
      style: {
        color: colors.green,
        opacity: 0.5,
      },
      types: ['comment'],
    },
    {
      style: {
        color: colors.blue,
      },
      types: ['builtin', 'tag', 'changed', 'keyword'],
    },
    {
      style: {
        color: colors.green,
      },
      types: ['tag'],
    },
    {
      style: {
        color: colors.beige200,
      },
      types: ['punctuation', 'operator'],
    },
    {
      style: {
        color: colors.greenDark,
      },
      types: ['number', 'inserted'],
    },
    {
      style: {
        color: colors.pink,
      },
      types: ['constant'],
    },
    {
      style: {
        color: colors.blueLight,
      },
      types: ['attr-name', 'variable'],
    },
    {
      style: {
        color: colors.orange,
      },
      types: ['deleted', 'string'],
    },
    {
      style: {
        color: colors.yellow,
      },
      types: ['function'],
    },
    {
      style: {
        color: colors.red,
      },
      types: ['char'],
    },
  ],
};

export default theme;
