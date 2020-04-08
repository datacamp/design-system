import React from 'react';
import { useUIDSeed } from 'react-uid';

import ListItem, { ListItemProps } from '../components/List/ListItem';

export interface AlternateListItemProps {
  checked?: boolean | null;
  children: ListItemProps['children'];
}

const AlternateListItem: React.FC<AlternateListItemProps> = ({
  children,
  checked,
}) => {
  const uidSeed = useUIDSeed();
  const uid = uidSeed('checkbox-description');
  // Copied from react-markdown default renderer
  let checkbox = null;
  if (checked !== null && checked !== undefined) {
    checkbox = (
      <input
        aria-labelledby={uid}
        checked={checked}
        disabled
        readOnly
        type="checkbox"
      />
    );
  }

  return (
    <ListItem>
      {checkbox}
      <span id={uid}>{children}</span>
    </ListItem>
  );
};

export default AlternateListItem;
