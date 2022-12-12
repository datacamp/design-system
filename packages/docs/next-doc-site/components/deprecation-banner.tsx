import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import { SIDEBAR_WIDTH } from './constants';

const bannerStyle = css`
  position: fixed;
  z-index: 100;
  display: flex;
  gap: 16px;
  padding: 16px;
  width: 100%;
  background: ${tokens.colors.redDark};
  width: calc(100% - ${SIDEBAR_WIDTH}px);
`;

const textStyle = css`
  color: ${tokens.colors.white};
  line-height: 1.5;
  max-width: 916px;
`;

const warningStyle = css`
  font-size: 30px;
  align-self: center;
`;

const linkStyle = css`
  color: ${tokens.colors.white};
  font-weight: ${tokens.fontWeights.bold};
  text-decoration: underline;

  &:active {
    color: ${tokens.colors.white};
  }
`;

function DeprecationBanner(): JSX.Element {
  return (
    <div css={bannerStyle}>
      <Text css={warningStyle}>⚠️</Text>
      <Text css={textStyle}>
        This version of Waffles Design System is no longer maintained, and was
        deprecated at the end of <strong>2022</strong>. It's{' '}
        <a css={linkStyle} href="https://github.com/datacamp/design-system">
          main repository
        </a>{' '}
        is archived. Please migrate your app to the{' '}
        <a css={linkStyle} href="https://waffles.datacamp.com/">
          New Waffles
        </a>
        .
      </Text>
    </div>
  );
}

export default DeprecationBanner;
