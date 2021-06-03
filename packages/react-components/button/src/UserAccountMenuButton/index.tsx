import { CogIcon, ExitIcon, UserIcon } from '@datacamp/waffles-icons';
import { css } from '@emotion/react';

import Button from './Button';
import Dropdown from './Dropdown';
import MenuItem from './MenuItem';
import useMenu from './useMenu';

const wrapperStyle = css({
  alignItems: 'center',
  display: 'inline-flex',
  height: '100%',
  position: 'relative',
});

function UserAccountMenuButton(): JSX.Element {
  const { buttonProps, isOpen, itemProps } = useMenu(3);

  return (
    <div css={wrapperStyle}>
      <Button isOpen={isOpen} {...buttonProps} />
      {isOpen && (
        <Dropdown>
          <MenuItem
            href="https://www.datacamp.com"
            icon={UserIcon}
            {...itemProps[0]}
          >
            My Profile
          </MenuItem>
          <MenuItem
            href="https://www.datacamp1.com"
            icon={CogIcon}
            {...itemProps[1]}
          >
            Account Settings
          </MenuItem>
          <MenuItem
            href="https://www.datacamp2.com"
            icon={ExitIcon}
            {...itemProps[2]}
          >
            Log Out
          </MenuItem>
        </Dropdown>
      )}
    </div>
  );
}

export default UserAccountMenuButton;
