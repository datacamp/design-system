import Card from '@datacamp/waffles-card';
import { css } from '@emotion/react';
import { Children, cloneElement } from 'react';

import { FULL_MENU_MEDIA_QUERY } from './constants';
import { ItemProps } from './types';
import XpIndicator from './XpIndicator';

const dropdownStyle = css({
  position: 'absolute',
  right: 0,
  zIndex: 99,
});

const cardStyle = css({
  overflow: 'hidden',
});

const listStyle = css({
  boxSizing: 'border-box',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  paddingBottom: 8,
  paddingTop: 8,
});

type DropdownProps = {
  children: React.ReactNode;
  itemsProps: ItemProps[];
  offset?: number;
  totalXp?: number;
};

function Dropdown({
  children,
  itemsProps,
  offset = 0,
  totalXp,
}: DropdownProps): JSX.Element {
  function renderChildren(): React.ReactNode {
    return Children.map(children, (child, index) => {
      return cloneElement(child as React.ReactElement, {
        ...itemsProps[index],
      });
    });
  }

  return (
    <div
      css={css(dropdownStyle, {
        [FULL_MENU_MEDIA_QUERY]: {
          top: 38 + offset,
        },
        top: 44 + offset,
      })}
      role="menu"
    >
      <Card css={cardStyle} elevation={4}>
        {totalXp != null && <XpIndicator totalXp={totalXp} />}
        <ul css={listStyle}>{renderChildren()}</ul>
      </Card>
    </div>
  );
}

export default Dropdown;
