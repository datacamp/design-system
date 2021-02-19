import { css, keyframes } from '@emotion/react';

const spinner = keyframes`0%
{ opacity: 0; }
100%
{ opacity: 1; }`;

const spinnerStyle = css({
  g: {
    animation: `${spinner} 1s infinite`,
  },

  'g:nth-of-type(1)': {
    animationDelay: '-0.9166666666666666s',
  },
  'g:nth-of-type(2)': {
    animationDelay: '-0.8333333333333334s',
  },
  'g:nth-of-type(3)': {
    animationDelay: ' -0.75s',
  },
  'g:nth-of-type(4)': {
    animationDelay: '-0.6666666666666666s',
  },
  'g:nth-of-type(5)': {
    animationDelay: '-0.5833333333333334s',
  },
  'g:nth-of-type(6)': {
    animationDelay: '-0.5s',
  },
  'g:nth-of-type(7)': {
    animationDelay: '-0.4166666666666667s',
  },
  'g:nth-of-type(8)': {
    animationDelay: '-0.3333333333333333s',
  },
  'g:nth-of-type(9)': {
    animationDelay: '-0.25s',
  },
  'g:nth-of-type(10)': {
    animationDelay: '-0.16666666666666666s',
  },
  'g:nth-of-type(11)': {
    animationDelay: '-0.08333333333333333s',
  },
  'g:nth-of-type(12)': {
    animationDelay: '0s',
  },
});

export default spinnerStyle;
