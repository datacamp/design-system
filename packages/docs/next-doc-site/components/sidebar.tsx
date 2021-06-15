import { Small } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Link from 'next/link';
import { transparentize } from 'polished';

import { PAGE_HEADER_HEIGHT, SIDEBAR_WIDTH } from './constants';
import Logo from './logo';
import Navigation from './navigation';

const wrapperStyle = css`
  position: fixed;
  height: 100vh;
  max-height: 100vh;
  width: ${SIDEBAR_WIDTH}px;
  background-color: ${tokens.colors.navyDark};
  display: flex;
  flex-direction: column;
`;

const headerStyle = css`
  width: 100%;
  padding: 40px;
  padding-bottom: 0;
  height: ${PAGE_HEADER_HEIGHT}px;
  border-bottom: 1px solid ${tokens.colors.navy};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const linkStyle = css`
  display: flex;
  padding: 8px;
  margin: 0;
  outline: 0;
  border-radius: ${tokens.border.radius};

  &:hover {
    background-color: ${transparentize(0.95, tokens.colors.white)};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${tokens.colors.blueDark};
  }
`;

const scrollableContent = css`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  overflow-y: scroll;
`;

const copyStyle = css`
  display: block;
  padding: 48px 0 16px 48px;
  color: ${tokens.colors.white};
  opacity: 0.5;
  user-select: none;
`;

function Sidebar(): JSX.Element {
  return (
    <section css={wrapperStyle}>
      <header css={headerStyle}>
        <Link href="/" passHref>
          <a css={linkStyle}>
            <Logo />
          </a>
        </Link>
      </header>
      <div css={scrollableContent}>
        <Navigation />
        <Small css={copyStyle}>© 2021 DataCamp, Inc.</Small>
      </div>
    </section>
  );
}

export default Sidebar;
