import { CogIcon, ExitIcon, UserIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import Menu from './Menu';
import MenuItem from './MenuItem';

const logoutStyle = css({
  borderTop: `${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium}`,
  marginTop: tokens.spacing.small,
  paddingTop: tokens.spacing.small,
});

type UserAccountMenuProps = {
  /**
   * Additional menu items. It's advised to use predefined UserAccountMenu.MenuItem. New menu items are placed just above Log Out item.
   */
  children?: React.ReactNode;
  /**
   * Adjust vertical position of the dropdown. To move dropdown up provide negative value.
   */
  dropdownOffset?: number;
  /**
   * Root URL of all user account management links.
   */
  mainAppUrl: string;
  /**
   * Optional track ID of Account Settings menu item.
   */
  menuAccountSettingsTrackId?: string;
  /**
   * Optional track ID of Log Out menu item.
   */
  menuLogOutTrackId?: string;
  /**
   * Optional track ID of My Profile menu item.
   */
  menuMyProfileTrackId?: string;
  /**
   * Optional track ID of menu trigger (button opening dropdown).
   */
  menuTriggerTrackId?: string;
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
  menuAccountSettingsTrackId,
  menuLogOutTrackId,
  menuMyProfileTrackId,
  menuTriggerTrackId,
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
      triggerTrackId={menuTriggerTrackId}
    >
      {userSlug && (
        <MenuItem
          data-trackid={menuMyProfileTrackId}
          href={`${mainAppUrl}/profile/${userSlug}`}
          icon={UserIcon}
        >
          My Profile
        </MenuItem>
      )}
      <MenuItem
        data-trackid={menuAccountSettingsTrackId}
        href={`${mainAppUrl}/profile/account_settings`}
        icon={CogIcon}
      >
        Account Settings
      </MenuItem>
      {children}
      <MenuItem
        css={logoutStyle}
        data-trackid={menuLogOutTrackId}
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
