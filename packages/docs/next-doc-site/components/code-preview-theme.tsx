// eslint-disable-next-line filenames/match-exported
import tokens from '@datacamp/waffles-tokens';

const theme = {
  plain: {
    backgroundColor: 'transparent',
    color: tokens.colors.beige200,
    fontFamily: tokens.fontFamily.mono,
    fontSize: tokens.fontSize.h6,
    margin: 0,
  },
  styles: [
    {
      style: {
        color: tokens.colors.blueDark,
      },
      types: ['prolog'],
    },
    {
      style: {
        color: tokens.colors.green,
        opacity: 0.5,
      },
      types: ['comment'],
    },
    {
      style: {
        color: tokens.colors.blue,
      },
      types: ['builtin', 'tag', 'changed', 'keyword'],
    },
    {
      style: {
        color: tokens.colors.green,
      },
      types: ['tag'],
    },
    {
      style: {
        color: tokens.colors.beige200,
      },
      types: ['punctuation', 'operator'],
    },
    {
      style: {
        color: tokens.colors.greenDark,
      },
      types: ['number', 'inserted'],
    },
    {
      style: {
        color: tokens.colors.pink,
      },
      types: ['constant'],
    },
    {
      style: {
        color: tokens.colors.blueLight,
      },
      types: ['attr-name', 'variable'],
    },
    {
      style: {
        color: tokens.colors.orange,
      },
      types: ['deleted', 'string'],
    },
    {
      style: {
        color: tokens.colors.yellow,
      },
      types: ['function'],
    },
    {
      style: {
        color: tokens.colors.red,
      },
      types: ['char'],
    },
  ],
};

export default theme;
