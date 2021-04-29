import { css } from '@emotion/react';

import Link from './navigation-link';

const navStyle = css`
  flex-grow: 1;
`;

function Navigation(): JSX.Element {
  return (
    <nav css={navStyle}>
      <Link href="/">Introduction</Link>
      <Link href="/design/colors">Colors</Link>
    </nav>
  );
}

export default Navigation;
