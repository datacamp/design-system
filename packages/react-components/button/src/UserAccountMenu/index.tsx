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

type UserAccountMenuProps = {
  /**
   * Additional menu items. It's advised to use predefined UserAccountMenu.MenuItem. New menu items are placed just above Log Out item.
   */
  children?: React.ReactNode;
  /**
   * Adjust vertical position of the dropdown. To move dropdown down provide negative value.
   */
  dropdownOffset?: number;
  /**
   * Root URL of all user account management links.
   */
  mainAppUrl: string;
  /**
   * Display little notifications dot.
   */
  showAlertDot?: boolean;
  /**
   * URL to user profile picture. If not provided default avatar will be displayed.
   */
  userAvatarUrl?: string;
  /**
   * Slug required to correctly redirect user to his profile page. If not provided My Profile menu item will be hidden.
   */
  userSlug?: string;
  /**
   * Show total XP gained by the user. If not provided whole XP bar won't be displayed.
   */
  userTotalXp?: number;
};

function UserAccountMenu({
  children,
  dropdownOffset,
  mainAppUrl,
  showAlertDot,
  userAvatarUrl,
  userSlug,
  userTotalXp,
}: UserAccountMenuProps): JSX.Element {
  return (
    <Menu
      avatarUrl={userAvatarUrl}
      dropdownOffset={dropdownOffset}
      showAlertDot={showAlertDot}
      totalXp={userTotalXp}
    >
      {userSlug && (
        <MenuItem
          data-trackid="ds-snowplow-link-main-menu-my-profile"
          href={`${mainAppUrl}/profile/${userSlug}`}
          icon={UserIcon}
        >
          My Profile
        </MenuItem>
      )}
      <MenuItem
        data-trackid="ds-snowplow-link-main-menu-account-settings"
        href={`${mainAppUrl}/profile/account_settings`}
        icon={CogIcon}
      >
        Account Settings
      </MenuItem>
      {children}
      <MenuItem
        css={logoutStyle}
        data-trackid="ds-snowplow-header-personal-logout"
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
