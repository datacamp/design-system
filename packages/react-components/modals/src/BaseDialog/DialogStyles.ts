import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import tinycolor from 'tinycolor2';

export const animationTime = 600;

export const bodyOpenStyle = css({ overflow: 'hidden' });

export const overlayStyle = css({
  backgroundColor: tinycolor(tokens.color.opaque.primaryDark.value.rgb)
    .setAlpha(0.8)
    .toRgbString(),
  bottom: 0,
  left: 0,
  opacity: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  transition: `opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1)`,
  zIndex: parseInt(tokens.zIndex[100].value, 10),
});

export const overlayStyleAfterOpen = css`
  opacity: 1 !important;
`;

export const overlayStyleBeforeClose = css`
  opacity: 0 !important;
`;

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
