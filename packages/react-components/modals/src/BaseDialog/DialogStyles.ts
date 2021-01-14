import { css } from '@emotion/react';

export const animationTime = 600;

export const contentStyle = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: 0,
  opacity: 0,
  outline: 'none',
  transform: 'scale(0.5)',
  transition: `0.4s cubic-bezier(0.19, 1, 0.22, 1);`,
});

export const contentStyleAfterOpen = css`
  opacity: 1 !important;
  transform: scale(1) !important;
`;

export const contentStyleBeforeClose = css`
  opacity: 0 !important;
`;
