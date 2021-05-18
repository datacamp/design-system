// eslint-disable-next-line filenames/match-exported
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import Link from './navigation-link';

type NavigationItemProps = {
  href: string;
  isStandalone?: boolean;
  label: string;
};

function NavigationItem({
  href,
  isStandalone = true,
  label,
}: NavigationItemProps): JSX.Element {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <li
      css={css`
        list-style: none;
        color: ${isActive ? tokens.colors.green : tokens.colors.white};
        background-color: ${isActive
          ? tokens.colors.navy
          : tokens.colors.navyDark};

        &:not(:first-of-type) {
          border-top: ${isStandalone
            ? `1px solid ${tokens.colors.navy}`
            : 'none'};
        }
      `}
    >
      <Link
        css={css`
          color: ${isActive ? tokens.colors.green : tokens.colors.white};
          padding-left: ${isStandalone ? 48 : 64}px;
          font-size: ${isStandalone ? tokens.fontSize.h4 : tokens.fontSize.h6};
        `}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
}

export default NavigationItem;
