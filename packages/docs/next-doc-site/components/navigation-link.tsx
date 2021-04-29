// eslint-disable-next-line filenames/match-exported
import {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
} from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const linkStyle = css`
  display: block;
  color: ${colors.white};
  width: 100%;
  outline: 0;
  font-size: ${fontSize.base};
  font-weight: ${fontWeight.regular} !important;
  font-family: ${fontFamily.sansSerif};
  border: 1px solid ${colors.navy};
  border-left: none;
  border-right: none;
  padding: 16px 48px;
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
};

function NavigationLink({ children, href }: NavigationLinkProps): JSX.Element {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <a
        css={css`
          ${linkStyle};
          color: ${isActive ? colors.green : colors.white};
          background-color: ${isActive ? colors.navy : colors.navyDark};
        `}
      >
        {children}
      </a>
    </Link>
  );
}

export default NavigationLink;
