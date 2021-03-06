import { css } from '@emotion/react';
import { Children, isValidElement } from 'react';

import Button from './Button';
import Dropdown from './Dropdown';
import useMenu from './useMenu';

const wrapperStyle = css({
  alignItems: 'center',
  display: 'inline-flex',
  position: 'relative',
});

type Menu = {
  avatarUrl?: string;
  children: React.ReactNode;
  dropdownOffset?: number;
  showAlertDot?: boolean;
  totalXp?: number;
  triggerTrackId?: string;
};

function Menu({
  avatarUrl,
  children,
  dropdownOffset,
  showAlertDot,
  totalXp,
  triggerTrackId,
}: Menu): JSX.Element {
  // Number of non-null, non-undefined, and non-false children
  const numberOfItems = Children.toArray(children).length;

  // Render only valid children to keep it in sync with numberOfItems
  function renderValidChildren(): React.ReactNode {
    return Children.toArray(children).filter((child) => {
      return isValidElement(child);
    }) as React.ReactNode;
  }

  const { buttonProps, isOpen, itemsProps } = useMenu(numberOfItems);

  return (
    <div css={wrapperStyle}>
      <Button
        avatarUrl={avatarUrl}
        isOpen={isOpen}
        showAlertDot={showAlertDot}
        {...buttonProps}
        aria-label="My Account"
        data-testid="user-account-menu-button"
        data-trackid={triggerTrackId}
      />
      {isOpen && (
        <Dropdown
          itemsProps={itemsProps}
          offset={dropdownOffset}
          totalXp={totalXp}
        >
          {renderValidChildren()}
        </Dropdown>
      )}
    </div>
  );
}

export default Menu;
