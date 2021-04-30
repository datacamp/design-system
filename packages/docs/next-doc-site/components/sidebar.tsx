import { Small } from '@datacamp/waffles-text';
import { border, colors } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Link from 'next/link';

import { PAGE_HEADER_HEIGHT, SIDEBAR_WIDTH } from './constants';
import Logo from './logo';
import Navigation from './navigation';

const wrapperStyle = css`
  position: fixed;
  height: 100vh;
  max-height: 100vh;
  width: ${SIDEBAR_WIDTH}px;
  background-color: ${colors.navyDark};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const headerStyle = css`
  width: 100%;
  padding: 40px;
  padding-bottom: 0;
  height: ${PAGE_HEADER_HEIGHT - 1}px;
`;

const linkStyle = css`
  display: flex;
  padding: 8px;
  margin: 0;
  outline: 0;
  border-radius: ${border.radius};

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const copyStyle = css`
  display: block;
  padding-left: 48px;
  padding-bottom: 16px;
  color: ${colors.white};
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
      <Navigation />
      <Small css={copyStyle}>© 2021 DataCamp, Inc.</Small>
    </section>
  );
}

export default Sidebar;
