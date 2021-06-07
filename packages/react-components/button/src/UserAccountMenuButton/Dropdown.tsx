import Card from '@datacamp/waffles-card';
import { css } from '@emotion/react';
import { Children, cloneElement, isValidElement } from 'react';

import { ItemProps } from './types';
import XpIndicator from './XpIndicator';

const dropdownStyle = css({
  '@media (min-width: 821px)': {
    top: 38,
  },
  position: 'absolute',
  right: 0,
  top: 44,
  zIndex: 99,
});

const cardStyle = css({
  overflow: 'hidden',
});

const listStyle = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  paddingBottom: 8,
  paddingTop: 8,
});

type DropdownProps = {
  children: React.ReactNode;
  itemsProps: ItemProps[];
  totalXp?: number;
};

function Dropdown({
  children,
  itemsProps,
  totalXp,
}: DropdownProps): JSX.Element {
  function renderChildren(): React.ReactNode {
    return Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          ...itemsProps[index],
        });
      }
      return null;
    });
  }

  return (
    <div css={dropdownStyle} role="menu">
      <Card css={cardStyle} elevation={4}>
        {totalXp != null && <XpIndicator totalXp={totalXp} />}
        <ul css={listStyle}>{renderChildren()}</ul>
      </Card>
    </div>
  );
}

export default Dropdown;
