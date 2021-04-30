import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ClassNames, keyframes } from '@emotion/react';
import React from 'react';

const stroke = keyframes({ '100%': { strokeDashoffset: 0 } });

const logoStartMask = keyframes({
  '0%, 6%': {
    clipPath: 'polygon(0% -12%, 0% -12%, 169% 63%, 169% 63%)',
  },
  '100%': {
    clipPath: 'polygon(0% -12%, 0% 308%, 169% 383%, 169% 63%)',
  },
});

const logoEndMask = keyframes({
  '0%, 71%': {
    clipPath: 'polygon(0% 0%, 0% 78.5%, 100% 34.5%, 100% -44%)',
  },
  '96%, 100%': {
    clipPath: 'polygon(0% 0%, 0% 140%, 100% 96%, 100% -44%)',
  },
});

const animationSettings = '2s infinite alternate';

interface LogomarkSpinner {
  className?: string;
  color?: 'navy' | 'white';
  size?: string;
}

const LogomarkSpinner = ({
  className,
  color = 'navy',
  size = '100px',
}: LogomarkSpinner): React.ReactElement => (
  // In Safari clip-path on SVG elements seems to break
  <div css={{ height: size, width: size }}>
    <ClassNames>
      {({ css, cx }) => (
        <div
          className={cx(
            className,
            css({
              animation: `${logoStartMask} cubic-bezier(0.65, 0, 0.55, 1) ${animationSettings}`,
              margin: 'auto',
              width: '76.65%',
              willChange: 'clip-path',
            }),
          )}
        >
          <div
            css={{
              animation: `${logoEndMask} cubic-bezier(0, 0, 0.85, 1) ${animationSettings}`,
              willChange: 'clip-path',
            }}
          >
            <div
              css={{
                clipPath: 'polygon(-0.1% -10%, 169% 65%, -0.1% 139%)',
              }}
            >
              <svg
                css={{ display: 'block' }}
                version="1.1"
                viewBox="0 0 2640 3444"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>Loading</title>
                <path
                  css={{
                    animation: `${stroke} cubic-bezier(0.65, 0, 0.55, 1) ${animationSettings}`,
                    strokeDasharray: 9800,
                    strokeDashoffset: 9800,
                    willChange: 'stroke-dashoffset',
                  }}
                  d="M0 0 M2569 1056L143 2447V149l1175 673v1867l1248 715"
                  fill="none"
                  stroke={tokens.color.primary[color].value.hex}
                  strokeLinejoin="round"
                  strokeWidth="300"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </ClassNames>
  </div>
);

export default LogomarkSpinner;
