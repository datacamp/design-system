/* eslint-disable sonarjs/no-duplicate-string */
import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import { AddCircleIcon } from '@datacamp/waffles-icons';
import { fireEvent } from '@testing-library/react';

import UserAccountMenuButton from './index';

describe('UserAccountMenuButton', () => {
  it('renders only profile image when menu is closed', async () => {
    const { getByAltText, queryByRole } = await axeRender(
      <UserAccountMenuButton mainAppUrl="https://datacamp.com" />,
    );
    const avatar = getByAltText('Profile avatar');
    const dropdown = queryByRole('menu');

    expect(avatar).toBeInTheDocument();
    expect(dropdown).not.toBeInTheDocument();
  });

  it('renders alert dot if appropriate flag is passed', async () => {
    const { getByTestId } = await axeRender(
      <UserAccountMenuButton mainAppUrl="https://datacamp.com" showAlertDot />,
    );

    const alertDot = getByTestId('user-account-menu-alert-dot');

    expect(alertDot).toBeInTheDocument();
  });

  it('clicking menu button opens dropdown, and clicking it again closes dropdown', async () => {
    const { getByTestId, queryByRole } = await axeRender(
      <UserAccountMenuButton mainAppUrl="https://datacamp.com" />,
    );
    const button = getByTestId('user-account-menu-button');

    expect(queryByRole('menu')).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByRole('menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByRole('menu')).not.toBeInTheDocument();
  });

  it('renders fallback profile image, account settings, and logout links, when menu is opened and only main app url is passed', async () => {
    const {
      getByAltText,
      getByRole,
      getByTestId,
      getByText,
      queryByText,
    } = await axeRender(
      <UserAccountMenuButton mainAppUrl="https://datacamp.com" />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const dropdown = getByRole('menu');
    const avatar = getByAltText('Profile avatar');
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

  it('renders profile image, XP indicator, my profile, account settings, and logout links, when menu is opened and all user props are passed', async () => {
    const { getByAltText, getByTestId, getByText } = await axeRender(
      <UserAccountMenuButton
        mainAppUrl="https://datacamp.com"
        userAvatarUrl="taylor-swift-pic.jpg"
        userSlug="taylorswift"
        userTotalXp={2000}
      />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const avatar = getByAltText('Profile avatar');
    const xpIndicator = getByText(/2[.,]?000 xp/i);
    const profileLink = getByText('My Profile').closest('a');
    const accountSettingsLink = getByText('Account Settings').closest('a');
    const logoutLink = getByText('Log Out').closest('a');

    expect(button).toBeInTheDocument();
    expect(xpIndicator).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('taylor-swift-pic.jpg'),
    );
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute(
      'href',
      'https://datacamp.com/profile/taylorswift',
    );
    expect(accountSettingsLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });

  it('renders custom menu items passed as children', async () => {
    const { getByTestId, getByText } = await axeRender(
      <UserAccountMenuButton mainAppUrl="https://datacamp.com">
        <UserAccountMenuButton.MenuItem
          href="https://info.com"
          icon={AddCircleIcon}
        >
          Additional Info
        </UserAccountMenuButton.MenuItem>
        <UserAccountMenuButton.MenuItem
          href="https://help.com/help"
          icon={AddCircleIcon}
        >
          Get Help
        </UserAccountMenuButton.MenuItem>
      </UserAccountMenuButton>,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const accountSettingsLink = getByText('Account Settings').closest('a');
    const logoutLink = getByText('Log Out').closest('a');
    const infoLink = getByText('Additional Info').closest('a');
    const helpLink = getByText('Get Help').closest('a');

    expect(accountSettingsLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
    expect(infoLink).toBeInTheDocument();
    expect(infoLink).toHaveAttribute('href', 'https://info.com');
    expect(helpLink).toBeInTheDocument();
    expect(helpLink).toHaveAttribute('href', 'https://help.com/help');
  });

  it("when custom menu item is clicked it's onClick handler is called", async () => {
    const handleClick = jest.fn();
    const { getByTestId, getByText } = await axeRender(
      <UserAccountMenuButton mainAppUrl="https://datacamp.com">
        <UserAccountMenuButton.MenuItem
          icon={AddCircleIcon}
          onClick={handleClick}
        >
          Click Me
        </UserAccountMenuButton.MenuItem>
      </UserAccountMenuButton>,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const menuItem = getByText('Click Me').closest('a');
    fireEvent.click(menuItem);

    expect(menuItem).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders fallback profile image when it fails to load', async () => {
    const { getByAltText } = await axeRender(
      <UserAccountMenuButton mainAppUrl="https://datacamp.com" />,
    );
    const avatar = getByAltText('Profile avatar');
    fireEvent.error(avatar);

    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('data:image/svg+xml'),
    );
  });

  it('renders total XP correctly when 0 is passed', async () => {
    const { getByTestId, getByText } = await axeRender(
      <UserAccountMenuButton
        mainAppUrl="https://datacamp.com"
        userTotalXp={0}
      />,
    );
    const button = getByTestId('user-account-menu-button');
    fireEvent.click(button);
    const xpIndicator = getByText(/0 xp/i);

    expect(xpIndicator).toBeInTheDocument();
  });
});
