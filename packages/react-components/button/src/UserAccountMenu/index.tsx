import { CogIcon, ExitIcon, UserIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import Menu from './Menu';
import MenuItem from './MenuItem';

const logoutStyle = css({
  borderTop: `1px solid ${tokens.colors.beige400}`,
  marginTop: 8,
  paddingTop: 8,
});

type UserAccountProps = {
  children?: React.ReactNode;
  mainAppUrl: string;
  showAlertDot?: boolean;
  userAvatarUrl?: string;
  userSlug?: string;
  userTotalXp?: number;
};

function UserAccountMenu({
  children,
  mainAppUrl,
  showAlertDot,
  userAvatarUrl,
  userSlug,
  userTotalXp,
}: UserAccountProps): JSX.Element {
  return (
    <Menu
      avatarUrl={userAvatarUrl}
      showAlertDot={showAlertDot}
      totalXp={userTotalXp}
    >
      {userSlug && (
        <MenuItem href={`${mainAppUrl}/profile/${userSlug}`} icon={UserIcon}>
          My Profile
        </MenuItem>
      )}
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

UserAccountMenu.MenuItem = MenuItem;

export default UserAccountMenu;
