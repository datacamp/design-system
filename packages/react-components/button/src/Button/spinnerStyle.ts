import { css, keyframes } from '@emotion/core';

const spinner = keyframes`0%
{ opacity: 0; }
100%
{ opacity: 1; }`;

const getNthChildSelector = (n: number): string =>
  `g:nth-child(${n}):not(style) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */`;

const spinnerStyleObject: {
  [key: string]: { animation?: string; animationDelay?: string };
} = {
  g: {
    animation: `${spinner} 1s infinite`,
  },
};

spinnerStyleObject[getNthChildSelector(1)] = {
  animationDelay: '-0.9166666666666666s',
};
spinnerStyleObject[getNthChildSelector(2)] = {
  animationDelay: '-0.8333333333333334s',
};
spinnerStyleObject[getNthChildSelector(3)] = {
  animationDelay: ' -0.75s',
};
spinnerStyleObject[getNthChildSelector(4)] = {
  animationDelay: '-0.6666666666666666s',
};
spinnerStyleObject[getNthChildSelector(5)] = {
  animationDelay: '-0.5833333333333334s',
};
spinnerStyleObject[getNthChildSelector(6)] = {
  animationDelay: '-0.5s',
};
spinnerStyleObject[getNthChildSelector(7)] = {
  animationDelay: '-0.4166666666666667s',
};
spinnerStyleObject[getNthChildSelector(8)] = {
  animationDelay: '-0.3333333333333333s',
};
spinnerStyleObject[getNthChildSelector(9)] = {
  animationDelay: '-0.25s',
};
spinnerStyleObject[getNthChildSelector(10)] = {
  animationDelay: '-0.16666666666666666s',
};
spinnerStyleObject[getNthChildSelector(11)] = {
  animationDelay: '-0.08333333333333333s',
};
spinnerStyleObject[getNthChildSelector(12)] = {
  animationDelay: '0s',
};

const spinnerStyle = css(spinnerStyleObject);

export default spinnerStyle;
