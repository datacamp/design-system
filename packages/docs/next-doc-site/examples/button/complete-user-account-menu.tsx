import { UserAccountMenu } from '@datacamp/waffles-button';
import { InfoCircleIcon, VideoCameraIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';

function Example(): JSX.Element {
  return (
    <header
      css={{
        alignItems: 'center',
        backgroundColor: tokens.colors.white,
        display: 'flex',
        height: 54,
        justifyContent: 'flex-end',
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
      }}
    >
      <UserAccountMenu
        mainAppUrl="https://www.datacamp.com"
        menuLogOutTrackId="track-menu-log-out"
        menuTriggerTrackId="track-menu-trigger"
        userAvatarUrl="/assets/example-profile-pic.jpg"
        userSlug="taylorswift"
        userTotalXp={4200}
      >
        <UserAccountMenu.MenuItem
          css={{
            borderTop: `1px solid ${tokens.colors.beige400}`,
            marginTop: 8,
            paddingTop: 8,
          }}
          href="https://en.wikipedia.org/wiki/Taylor_Swift_videography"
          icon={VideoCameraIcon}
        >
          Videography
        </UserAccountMenu.MenuItem>
        <UserAccountMenu.MenuItem
          icon={InfoCircleIcon}
          onClick={() => alert("It's so exciting!")}
          showAlertDot
        >
          Additional Info
        </UserAccountMenu.MenuItem>
      </UserAccountMenu>
    </header>
  );
}

export default Example;
