import { css } from '@emotion/react';
import { Children } from 'react';

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
  const numberOfItems = Children.count(children);
  const { buttonProps, isOpen, itemsProps } = useMenu(numberOfItems);

  return (
    <div css={wrapperStyle}>
      <Button
        avatarUrl={avatarUrl}
        isOpen={isOpen}
        showAlertDot={showAlertDot}
        {...buttonProps}
      />
      {isOpen && (
        <Dropdown itemsProps={itemsProps} totalXp={totalXp}>
          {children}
        </Dropdown>
      )}
    </div>
  );
}

export default Menu;
