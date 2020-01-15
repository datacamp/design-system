import { css } from '@emotion/core';

export const animationTime = 600;
const baseContentStyle = css({
  bottom: '0',
  margin: 'auto',
  opacity: 0,
  outline: 'none',
  position: 'absolute',
  top: '0',
  transition: `0.4s cubic-bezier(0.19, 1, 0.22, 1);`,
});

export const contentStyles = {
  left: css(baseContentStyle, {
    left: '0',
    transform: 'translate(-100%, 0)',
  }),
  right: css(baseContentStyle, {
    right: '0',
    transform: 'translate(100%, 0)',
  }),
};

export const contentStyleAfterOpen = css`
  opacity: 1 !important;
  transform: translate(0, 0) !important;
`;

export const contentStylesBeforeClose = {
  left: css`
    opacity: 0 !important;
    transform: translate(-100%, 0) !important;
  `,
  right: css`
    opacity: 0 !important;
    transform: translate(100%, 0) !important;
  `,
};
