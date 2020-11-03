import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, keyframes } from '@emotion/core';
import React from 'react';

const dash = keyframes({
  '0%': {
    strokeDashoffset: '340%',
  },
  '100%': {
    strokeDashoffset: 0,
  },
});

interface LogomarkSpinner {
  className?: string;
  color?: string;
  size?: string;
}

const LogomarkSpinner = ({
  size = '100px',
  className,
  color = tokens.color.primary.navy.value.hex,
}: LogomarkSpinner): React.ReactElement => (
  <svg
    className={className}
    height={size}
    version="1.1"
    viewBox="0 0 225 225"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>Loading</title>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <polyline
        css={css({
          animation: `${dash} 2s infinite cubic-bezier(0.65, 0, 0.55, 1) reverse`,
          strokeDasharray: '170%',
          strokeDashoffset: 0,
        })}
        points="158.573452 177.08 112.038068 150.488473 112.038068 73.7151963 66 48 66 138.609263 157.803171 87.5483322"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="12"
      ></polyline>
    </g>
  </svg>
);

export default LogomarkSpinner;
