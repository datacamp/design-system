import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const bannerStyle = css`
  display: flex;
  gap: 16px;
  padding: 16px;
  width: 100%;
  background: ${tokens.colors.redDark};
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
  font-weight: ${tokens.fontWeight.bold};
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
        This version of Waffles Design Sytem is going to be deprecated by the
        end of <strong>2022</strong>: its{' '}
        <a css={linkStyle} href="https://github.com/datacamp/design-system">
          main repository
        </a>{' '}
        will be archived and no new contributions will be accepted. By that time
        please migrate your app to the{' '}
        <a css={linkStyle} href="https://github.com/datacamp/waffles">
          New Waffles
        </a>
        .
      </Text>
    </div>
  );
}

export default DeprecationBanner;
