// eslint-disable-next-line filenames/match-exported
import { colors, fontSize } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { Children, cloneElement, isValidElement, ReactElement } from 'react';

import categoryFromPath from '../helpers/category-from-path';

import Link from './navigation-link';

const listStyle = css`
  margin: 0;
  padding: 0;
`;

const itemStyle = css`
  border-top: 1px solid ${colors.navy};
`;

type CategoryProps = {
  children: React.ReactNode;
  label: string;
};

function NavigationCategory({ children, label }: CategoryProps): JSX.Element {
  // Take active path from first child passed to the component
  const { pathname } = useRouter();
  const firstChild = Children.toArray(children)[0] as ReactElement;
  const { href } = firstChild.props;
  const isActive = categoryFromPath(pathname) === categoryFromPath(href);

  // Set isStandalone flag on each child
  function renderChildren(): React.ReactNode {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          isStandalone: false,
        });
      }
      return null;
    });
  }

  return (
    <li css={itemStyle}>
      <Link
        css={css`
          font-size: ${fontSize.h4};
          color: ${isActive ? colors.green : colors.white};
        `}
        href={href}
      >
        {label}
      </Link>
      {isActive && <ul css={listStyle}>{renderChildren()}</ul>}
    </li>
  );
}

export default NavigationCategory;