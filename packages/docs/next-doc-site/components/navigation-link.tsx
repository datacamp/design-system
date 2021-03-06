import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Link from 'next/link';
import { transparentize } from 'polished';

const linkStyle = css`
  display: block;
  color: ${tokens.colors.white};
  width: 100%;
  outline: 0;
  font-size: ${tokens.fontSize.h6};
  font-weight: ${tokens.fontWeight.regular};
  font-family: ${tokens.fontFamily.sansSerif}, Arial, sans-serif;
  padding: 8px 48px;
  text-decoration: none;
  line-height: 1.5;
  user-select: none;

  &:hover {
    background-color: ${transparentize(0.95, tokens.colors.white)};
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${tokens.colors.blueDark};
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
