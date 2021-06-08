import { css } from '@emotion/react';
import { Children, isValidElement } from 'react';

import Button from './Button';
import Dropdown from './Dropdown';
import useMenu from './useMenu';

const wrapperStyle = css({
  alignItems: 'center',
  display: 'inline-flex',
  height: '100%',
  position: 'relative',
});

type Menu = {
  avatarUrl?: string;
  children: React.ReactNode;
  showAlertDot?: boolean;
  totalXp?: number;
};

function Menu({
  avatarUrl,
  children,
  showAlertDot,
  totalXp,
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
        data-testid="user-account-menu-button"
      />
      {isOpen && (
        <Dropdown itemsProps={itemsProps} totalXp={totalXp}>
          {renderValidChildren()}
        </Dropdown>
      )}
    </div>
  );
}

export default Menu;
