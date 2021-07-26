import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import React from 'react';

const listItemStyle = css({
  fontSize: tokens.fontSizes.medium,
  lineHeight: tokens.lineHeights.relaxed,
});

export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

const ListItem = ({ children, className }: ListItemProps): JSX.Element => {
  return (
    <li className={className} css={listItemStyle}>
      {children}
    </li>
  );
};

ListItem.displayName = 'List.Item';

export default ListItem;
