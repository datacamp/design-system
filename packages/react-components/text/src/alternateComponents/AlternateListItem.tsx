import React from 'react';

import ListItem, { ListItemProps } from '../components/List/ListItem';

export interface AlternateListItemProps {
  checked?: boolean | null;
  children: ListItemProps['children'];
}

const AlternateListItem: React.FC<AlternateListItemProps> = ({
  children,
  checked,
}) => {
  // Copied from react-markdown default renderer
  let checkbox = null;
  if (checked !== null && checked !== undefined) {
    checkbox = <input checked={checked} disabled readOnly type="checkbox" />;
  }

  return (
    <ListItem>
      {checkbox}
      {children}
    </ListItem>
  );
};

export default AlternateListItem;
