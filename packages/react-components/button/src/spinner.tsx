import React from 'react';

import spinnerStyle from './spinnerStyles';

const Spinner: React.FC<{ className?: string; inverted?: boolean }> = ({
  className,
  inverted = false,
}) => {
  return (
    <svg
      className={className}
      height="16"
      viewBox="0 0 54 54"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Spinner</title>
      <g
        css={spinnerStyle}
        fill={inverted ? '#ffffff' : '#3D4251'}
        fillRule="nonzero"
      >
        <g transform="translate(24)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(30 15 71.785)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(60 15 47.785)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(90 15 39)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(120 15 33.928)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(150 15 30.215)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(180 15 27)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(-150 15 23.785)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(-120 15 20.072)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(-90 15 15)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(-60 15 6.215)">
          <rect height="12" rx="3" width="6" />
        </g>
        <g transform="rotate(-30 15 -17.785)">
          <rect height="12" rx="3" width="6" />
        </g>
      </g>
    </svg>
  );
};

export default Spinner;
