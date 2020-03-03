import { css } from '@emotion/core';
import React, { ReactElement, ReactNode } from 'react';

const listItemStyle = css({
  lineHeight: '1.5em',
  marginTop: 8,
});

export interface ListItemProps {
  children: ReactNode;
  className?: string;
}

const ListItem = ({ children, className }: ListItemProps): ReactElement => {
  return (
    <li className={className} css={listItemStyle}>
      {children}
    </li>
  );
};

ListItem.displayName = 'List.Item';

export default ListItem;
