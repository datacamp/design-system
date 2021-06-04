import { CogIcon, ExitIcon, UserIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import Button from './Button';
import Dropdown from './Dropdown';
import MenuItem from './MenuItem';
import useMenu from './useMenu';
import XpIndicator from './XpIndicator';

const wrapperStyle = css({
  alignItems: 'center',
  display: 'inline-flex',
  height: '100%',
  position: 'relative',
});

const logoutStyle = css({
  borderTop: `1px solid ${tokens.colors.beige400}`,
  marginTop: 8,
  paddingBottom: 8,
  paddingTop: 8,
});

function UserAccountMenuButton(): JSX.Element {
  const { buttonProps, isOpen, itemProps } = useMenu(3);

  return (
    <div css={wrapperStyle}>
      <Button isOpen={isOpen} {...buttonProps} />
      {isOpen && (
        <Dropdown>
          <XpIndicator />
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
            css={logoutStyle}
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
