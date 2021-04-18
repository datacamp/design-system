import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ClassNames, keyframes } from '@emotion/react';
import React from 'react';

const stroke = keyframes({ '100%': { strokeDashoffset: 0 } });

const logoStartMask = keyframes({
  '5%': {
    clipPath: 'polygon(0% -12%, 0% -12%, 169% 63%, 169% 63%)',
  },
  '100%': {
    clipPath: 'polygon(0% -12%, 0% 308%, 169% 383%, 169% 63%)',
  },
});

const logoEndMask = keyframes({
  '71%': {
    clipPath: 'polygon(0% 0%, 0% 77%, 100% 34%, 100% -44%)',
  },
  '95%': {
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
  <div css={{ position: 'relative', width: size }}>
    <div css={{ paddingTop: '100%' }}>
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              className,
              css({
                animation: `${logoStartMask} cubic-bezier(0.65, 0, 0.55, 1) ${animationSettings}`,
                bottom: 0,
                left: '11.675%',
                position: 'absolute',
                right: '11.675%',
                top: 0,
              }),
            )}
          >
            <div
              css={{
                animation: `${logoEndMask} cubic-bezier(0.3, 0.75, 1, 0.85) ${animationSettings}`,
              }}
            >
              <div
                css={{
                  clipPath: 'polygon(0% -10%, 168.5% 64%, 0% 135%)',
                }}
              >
                <svg
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
  </div>
);

export default LogomarkSpinner;
