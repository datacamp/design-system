import logomarkSpinnerNavyData from '@datacamp/waffles-animations/logomark-spinner-navy.json';
import logomarkSpinnerWhiteData from '@datacamp/waffles-animations/logomark-spinner-white.json';
import { css } from '@emotion/core';
import Lottie from 'lottie-react';
import React from 'react';

interface LogomarkSpinnerProps {
  className?: string;
  color?: 'navy' | 'white';
  size?: string;
}

const LogomarkSpinner = ({
  className,
  color = 'navy',
  size = '100px',
}: LogomarkSpinnerProps): React.ReactElement => {
  const animationData =
    color === 'navy' ? logomarkSpinnerNavyData : logomarkSpinnerWhiteData;

  return (
    <Lottie
      animationData={animationData}
      className={className}
      css={css({ width: size })}
    />
  );
};

export default LogomarkSpinner;
