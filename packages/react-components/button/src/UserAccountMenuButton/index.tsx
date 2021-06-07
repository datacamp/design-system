import { CogIcon, ExitIcon, UserIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import Menu from './Menu';
import MenuItem from './MenuItem';

const logoutStyle = css({
  borderTop: `1px solid ${tokens.colors.beige400}`,
  boxSizing: 'border-box',
  marginTop: 8,
  paddingTop: 8,
});

type UserAccountProps = {
  children?: React.ReactNode;
  mainAppUrl: string;
  showAlertDot?: boolean;
  userAvatarUrl?: string;
  userTotalXp?: number;
};

function UserAccountMenuButton({
  children,
  mainAppUrl,
  showAlertDot,
  userAvatarUrl,
  userTotalXp,
}: UserAccountProps): JSX.Element {
  return (
    <Menu
      avatarUrl={userAvatarUrl}
      showAlertDot={showAlertDot}
      totalXp={userTotalXp}
    >
      <MenuItem href={`${mainAppUrl}/profile`} icon={UserIcon}>
        My Profile
      </MenuItem>
      <MenuItem href={`${mainAppUrl}/profile/account_settings`} icon={CogIcon}>
        Account Settings
      </MenuItem>
      {children}
      <MenuItem
        css={logoutStyle}
        href={`${mainAppUrl}/users/sign_out`}
        icon={ExitIcon}
      >
        Log Out
      </MenuItem>
    </Menu>
  );
}

UserAccountMenuButton.MenuItem = MenuItem;

export default UserAccountMenuButton;
