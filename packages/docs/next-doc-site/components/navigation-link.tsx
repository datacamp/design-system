// eslint-disable-next-line filenames/match-exported
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Link from 'next/link';

import { A11Y_COLOR } from './constants';

const linkStyle = css`
  display: block;
  color: ${tokens.colors.white};
  width: 100%;
  outline: 0;
  font-size: ${tokens.fontSize.h6};
  font-weight: ${tokens.fontWeight.regular};
  font-family: ${tokens.fontFamily.sansSerif};
  padding: 8px 48px;
  text-decoration: none;
  line-height: 1.5;
  user-select: none;

  &:focus-visible {
    background-color: ${A11Y_COLOR};
  }
`;

type NavigationLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.HTMLProps<HTMLAnchorElement>;

function NavigationLink({
  children,
  href,
  ...restProps
}: NavigationLinkProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <a {...restProps} css={linkStyle}>
        {children}
      </a>
    </Link>
  );
}

export default NavigationLink;
