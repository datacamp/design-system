import { ssrSafeNotFirstChildSelector } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import _ from 'lodash';
import React from 'react';

const indicatorStyle = css({
  borderRadius: '50%',
  display: 'inline-block',
  height: 8,
  [ssrSafeNotFirstChildSelector]: {
    marginLeft: 8,
  },
  width: 8,
});

interface StepsIndicatorProps {
  currentStep?: number;
  totalSteps: number;
}

const StepsIndicator: React.FC<StepsIndicatorProps> = ({
  currentStep = 0,
  totalSteps,
}) => (
  <div
    aria-label={`Step ${currentStep} of ${totalSteps}`}
    css={{ lineHeight: '8px', marginTop: 16, padding: 0 }}
  >
    {_.times(totalSteps, (i) => (
      <div
        css={css(indicatorStyle, {
          backgroundColor:
            i >= currentStep ? 'rgba(255, 255, 255, 0.3)' : 'white',
        })}
        key={i}
      />
    ))}
  </div>
);

export default StepsIndicator;
