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
  children: React.ReactNode;
};

function Menu({ children }: Menu): JSX.Element {
  const numberOfItems = Children.count(children);
  const { buttonProps, isOpen, itemsProps } = useMenu(numberOfItems);

  return (
    <div css={wrapperStyle}>
      <Button isOpen={isOpen} {...buttonProps} />
      {isOpen && <Dropdown itemsProps={itemsProps}>{children}</Dropdown>}
    </div>
  );
}

export default Menu;
