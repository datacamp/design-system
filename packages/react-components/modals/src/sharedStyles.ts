import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { hexToRgbaColor } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';

export const bodyOpenStyle = css({ overflow: 'hidden' });

export const overlayStyle = css({
  alignItems: 'center',
  backgroundColor: hexToRgbaColor(tokens.color.primary.navy.value.hex, 0.8),
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  opacity: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  transition: `opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1)`,
  zIndex: 900,
});

export const overlayStyleAfterOpen = css`
  opacity: 1 !important;
`;

export const overlayStyleBeforeClose = css`
  opacity: 0 !important;
`;
