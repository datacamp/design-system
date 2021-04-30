// eslint-disable-next-line filenames/match-exported
import {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
} from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Link from 'next/link';

const linkStyle = css`
  display: block;
  color: ${colors.white};
  width: 100%;
  outline: 0;
  font-size: ${fontSize.h6};
  font-weight: ${fontWeight.regular};
  font-family: ${fontFamily.sansSerif};
  padding: 8px 48px;
  text-decoration: none;
  line-height: 1.5;
  user-select: none;

  &:focus-visible {
    background-color: rgba(255, 255, 255, 0.1);
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
