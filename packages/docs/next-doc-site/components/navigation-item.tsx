// eslint-disable-next-line filenames/match-exported
import { colors, fontSize } from '@datacamp/waffles-tokens';
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
        color: ${isActive ? colors.green : colors.white};
        background-color: ${isActive ? colors.navy : colors.navyDark};
        border-top: ${isStandalone ? `1px solid ${colors.navy}` : 'none'};
      `}
    >
      <Link
        css={css`
          color: ${isActive ? colors.green : colors.white};
          padding-left: ${isStandalone ? 48 : 64}px;
          font-size: ${isStandalone ? fontSize.h4 : fontSize.h6};
        `}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
}

export default NavigationItem;
