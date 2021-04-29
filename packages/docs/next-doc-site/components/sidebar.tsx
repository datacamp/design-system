import { colors } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import { SIDEBAR_WIDTH } from './constants';
import Logo from './logo';

const wrapperStyle = css`
  position: fixed;
  height: 100vh;
  max-height: 100vh;
  width: ${SIDEBAR_WIDTH}px;
  background-color: ${colors.navyDark};
  overflow: hidden;
`;

const headerStyle = css`
  width: 100%;
  padding: 48px;
  padding-bottom: 64px;
`;

function Sidebar(): JSX.Element {
  return (
    <section css={wrapperStyle}>
      <header css={headerStyle}>
        <Logo />
      </header>
    </section>
  );
}

export default Sidebar;
