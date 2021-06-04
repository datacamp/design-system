import { CogIcon, ExitIcon, UserIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import Menu from './Menu';
import MenuItem from './MenuItem';

const logoutStyle = css({
  borderTop: `1px solid ${tokens.colors.beige400}`,
  marginTop: 8,
  paddingBottom: 8,
  paddingTop: 8,
});

function UserAccountMenuButton(): JSX.Element {
  return (
    <Menu>
      <MenuItem href="https://www.datacamp.com" icon={UserIcon}>
        My Profile
      </MenuItem>
      <MenuItem href="https://www.datacamp1.com" icon={CogIcon}>
        Account Settings
      </MenuItem>
      <MenuItem
        css={logoutStyle}
        href="https://www.datacamp2.com"
        icon={ExitIcon}
      >
        Log Out
      </MenuItem>
    </Menu>
  );
}

export default UserAccountMenuButton;
