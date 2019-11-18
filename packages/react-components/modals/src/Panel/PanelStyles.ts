import { css } from '@emotion/core';

export const animationTime = 600;

export const contentStyle = css({
  bottom: '0',
  margin: 'auto',
  opacity: 0,
  outline: 'none',
  position: 'absolute',
  right: '0',
  top: '0',
  transform: 'translate(100%, 0)',
  transition: `0.4s cubic-bezier(0.19, 1, 0.22, 1);`,
});

export const contentStyleAfterOpen = css`
  opacity: 1 !important;
  transform: translate(0, 0) !important;
`;

export const contentStyleBeforeClose = css`
  opacity: 0 !important;
  transform: translate(100%, 0) !important;
`;
