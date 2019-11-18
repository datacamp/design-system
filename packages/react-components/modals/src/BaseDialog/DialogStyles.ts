import { css } from '@emotion/core';

export const animationTime = 600;

export const contentStyle = css({
  left: '50%',
  margin: 'auto',
  opacity: 0,
  outline: 'none',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%) scale(0.5)',
  transition: `0.4s cubic-bezier(0.19, 1, 0.22, 1);`,
});

export const contentStyleAfterOpen = css`
  opacity: 1 !important;
  transform: translate(-50%, -50%) scale(1) !important;
`;

export const contentStyleBeforeClose = css`
  opacity: 0 !important;
`;
