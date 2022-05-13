/* eslint-disable sonarjs/no-duplicate-string */
import '@testing-library/jest-dom/extend-expect';

import { AddCircleIcon } from '@datacamp/waffles-icons';
import { fireEvent, render, waitFor, within } from '@testing-library/react';

import UserAccountMenu from './index';

jest.mock('./defaultAvatar', () => 'data:image/svg+xml;base64,default-avatar');

describe('UserAccountMenu', () => {
  it('renders only profile image when menu is closed', () => {
    const { getByTestId, queryByRole } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com" />,
    );
    const avatar = getByTestId('user-account-menu-avatar');
    const dropdown = queryByRole('menu');

    expect(avatar).toBeInTheDocument();
    expect(dropdown).not.toBeInTheDocument();
  });

  it('renders alert dot if appropriate flag is passed', () => {
    const { getByTestId } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com" showAlertDot />,
    );

    const alertDot = getByTestId('user-account-menu-alert-dot');

    expect(alertDot).toBeInTheDocument();
  });

  it('clicking menu button opens dropdown, and clicking it again closes dropdown', () => {
    const { getByTestId, queryByRole } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com" />,
    );
    const button = getByTestId('user-account-menu-button');

    expect(queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByRole('menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByRole('menu')).not.toBeInTheDocument();
  });

  it('after menu item is clicked dropdown is closed', async () => {
    const { getByTestId, getByText, queryByRole } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com">
        <UserAccountMenu.MenuItem icon={AddCircleIcon} onClick={jest.fn()}>
          Click Me
        </UserAccountMenu.MenuItem>
      </UserAccountMenu>,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const menuItem = getByText('Click Me').closest('a') as HTMLElement;
    fireEvent.click(menuItem);
    const dropdown = queryByRole('menu');

    // Have to wait, because small delay is added to each event hander
    await waitFor(() => {
      expect(dropdown).not.toBeInTheDocument();
    });
  });

  it('renders fallback profile image, account settings, and logout links, when menu is opened and only main app URL is passed', () => {
    const { getByRole, getByTestId, getByText, queryByText } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com" />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const dropdown = getByRole('menu');
    const avatar = getByTestId('user-account-menu-avatar');
    const xpIndicator = queryByText(/xp/i);
    const profileLink = queryByText('My Profile');
    const accountSettingsLink = getByText('Account Settings').closest('a');
    const logoutLink = getByText('Log Out').closest('a');

    expect(button).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(xpIndicator).not.toBeInTheDocument();
    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('data:image/svg+xml'),
    );
    expect(profileLink).not.toBeInTheDocument();
    expect(accountSettingsLink).toBeInTheDocument();
    expect(accountSettingsLink).toHaveAttribute(
      'href',
      'https://datacamp.com/profile/account_settings',
    );
    expect(logoutLink).toBeInTheDocument();
    expect(logoutLink).toHaveAttribute(
      'href',
      'https://datacamp.com/users/sign_out',
    );
  });

  it('when custom profileUrl and accountSettingUrl are provided use them instead default ones', () => {
    const { getByRole, getByTestId, getByText, queryByText } = render(
      <UserAccountMenu
        accountSettingUrl="http://datacamp.com/custom-account-setting"
        mainAppUrl="https://datacamp.com"
        profileUrl="http://datacamp.com/custom-profile"
        userSlug="taylorswift"
      />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const dropdown = getByRole('menu');
    const profileLink = queryByText('My Profile')?.closest('a');
    const accountSettingsLink = getByText('Account Settings').closest('a');

    expect(button).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute(
      'href',
      'http://datacamp.com/custom-profile',
    );
    expect(accountSettingsLink).toBeInTheDocument();
    expect(accountSettingsLink).toHaveAttribute(
      'href',
      'http://datacamp.com/custom-account-setting',
    );
  });

  it('renders profile image, XP indicator, my profile, account settings, and logout links, when menu is opened and all user props are passed', () => {
    const { getByTestId, getByText } = render(
      <UserAccountMenu
        mainAppUrl="https://datacamp.com"
        userAvatarUrl="taylor-swift-pic.jpg"
        userSlug="taylorswift"
        userTotalXp={2000}
      />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const avatar = getByTestId('user-account-menu-avatar');
    const xpIndicator = getByText(/2[.,]?000 xp/i);
    const profileLink = getByText('My Profile').closest('a');
    const accountSettingsLink = getByText('Account Settings').closest('a');
    const logoutLink = getByText('Log Out').closest('a');

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute('data-trackid');
    expect(xpIndicator).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('taylor-swift-pic.jpg'),
    );
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).not.toHaveAttribute('data-trackid');
    expect(profileLink).toHaveAttribute(
      'href',
      'https://datacamp.com/profile/taylorswift',
    );
    expect(accountSettingsLink).toBeInTheDocument();
    expect(accountSettingsLink).not.toHaveAttribute('data-trackid');
    expect(logoutLink).toBeInTheDocument();
    expect(logoutLink).not.toHaveAttribute('data-trackid');
  });

  it('renders custom menu items passed as children', () => {
    const { getByTestId, getByText } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com">
        <UserAccountMenu.MenuItem href="https://info.com" icon={AddCircleIcon}>
          Additional Info
        </UserAccountMenu.MenuItem>
        <UserAccountMenu.MenuItem
          href="https://help.com/help"
          icon={AddCircleIcon}
          showAlertDot
        >
          Get Help
        </UserAccountMenu.MenuItem>
      </UserAccountMenu>,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const accountSettingsLink = getByText('Account Settings').closest('a');
    const logoutLink = getByText('Log Out').closest('a');
    const infoLink = getByText('Additional Info').closest('a');
    const helpLink = getByText('Get Help').closest('a');
    let alertDot;
    if (helpLink) {
      alertDot = within(helpLink).getByTestId('user-account-menu-alert-dot');
    }

    expect(accountSettingsLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
    expect(infoLink).toBeInTheDocument();
    expect(infoLink).toHaveAttribute('href', 'https://info.com');
    expect(helpLink).toBeInTheDocument();
    expect(helpLink).toHaveAttribute('href', 'https://help.com/help');
    expect(alertDot).toBeInTheDocument();
  });

  it("when custom menu item is clicked it's onClick handler is called", () => {
    const handleClick = jest.fn();
    const { getByTestId, getByText } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com">
        <UserAccountMenu.MenuItem icon={AddCircleIcon} onClick={handleClick}>
          Click Me
        </UserAccountMenu.MenuItem>
      </UserAccountMenu>,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const menuItem = getByText('Click Me').closest('a') as HTMLElement;
    fireEvent.click(menuItem);

    expect(menuItem).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('correct track IDs are assigned to menu items', () => {
    const { getByTestId, getByText } = render(
      <UserAccountMenu
        mainAppUrl="https://datacamp.com"
        menuAccountSettingsTrackId="track-menu-acccount-settings"
        menuLogOutTrackId="track-menu-log-out"
        menuMyProfileTrackId="track-menu-my-profile"
        menuTriggerTrackId="track-menu-trigger"
        userSlug="taylorswift"
      />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const profileLink = getByText('My Profile').closest('a');
    const accountSettingsLink = getByText('Account Settings').closest('a');
    const logoutLink = getByText('Log Out').closest('a');

    expect(button).toHaveAttribute('data-trackid', 'track-menu-trigger');
    expect(profileLink).toHaveAttribute(
      'data-trackid',
      'track-menu-my-profile',
    );
    expect(accountSettingsLink).toHaveAttribute(
      'data-trackid',
      'track-menu-acccount-settings',
    );
    expect(logoutLink).toHaveAttribute('data-trackid', 'track-menu-log-out');
  });

  it('renders fallback profile image when it fails to load', () => {
    const { getByTestId } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com" />,
    );
    const avatar = getByTestId('user-account-menu-avatar');
    fireEvent.error(avatar);

    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('data:image/svg+xml'),
    );
  });

  it('renders total XP correctly when 0 is passed', () => {
    const { getByTestId, getByText } = render(
      <UserAccountMenu mainAppUrl="https://datacamp.com" userTotalXp={0} />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const xpIndicator = getByText(/0 xp/i);

    expect(xpIndicator).toBeInTheDocument();
  });

  it('adjust dropdown vertical position by passing dropdownOffset prop', () => {
    const { getByRole, getByTestId } = render(
      <UserAccountMenu dropdownOffset={82} mainAppUrl="https://datacamp.com" />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const dropdown = getByRole('menu');

    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveStyle(`top: 126px;`);
  });

  describe('snapshots', () => {
    it("renders correctly when only main app URL is passed and it's closed", () => {
      const { container } = render(
        <UserAccountMenu mainAppUrl="https://datacamp.com" />,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it("renders correctly when only main app URL is passed and it's opened", () => {
      const { container, getByTestId } = render(
        <UserAccountMenu mainAppUrl="https://datacamp.com" />,
      );
      const button = getByTestId('user-account-menu-button');
      fireEvent.click(button);

      expect(container.firstChild).toMatchSnapshot();
    });

    it("renders correctly when all optional props are passed and it's opened", () => {
      const { container, getByTestId } = render(
        <UserAccountMenu
          mainAppUrl="https://datacamp.com"
          menuAccountSettingsTrackId="track-menu-account-settings"
          menuLogOutTrackId="track-menu-log-out"
          menuMyProfileTrackId="track-menu-my-profile"
          menuTriggerTrackId="track-menu-trigger"
          userAvatarUrl="taylor-swift-pic.jpg"
          userSlug="taylorswift"
          userTotalXp={2000}
        >
          <UserAccountMenu.MenuItem
            href="https://info.com"
            icon={AddCircleIcon}
          >
            Additional Info
          </UserAccountMenu.MenuItem>
        </UserAccountMenu>,
      );
      const button = getByTestId('user-account-menu-button');
      fireEvent.click(button);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
