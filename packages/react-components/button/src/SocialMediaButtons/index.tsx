import {
  FacebookRoundBrandIcon,
  GoogleColoredBrandIcon,
  LinkedinBrandIcon,
  TwitterBrandIcon,
} from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { hexToRgbaColor } from '@datacamp/waffles-utils';

import Button from '../Button';

type SocialMediaButtonProps = {
  className?: string;
  dataAttributes?: { [key: string]: string };
  href?: string;
};

const socialMediaButtonFactory = (
  name: string,
  color: string,
  logoElement: JSX.Element,
) => ({ className, dataAttributes, href }: SocialMediaButtonProps) => (
  <Button
    className={className}
    css={{
      ':hover': {
        backgroundColor: hexToRgbaColor(color, 0.15),
        borderColor: color,
        color,
      },
      borderColor: tokens.colors.greyMedium,
      color,
    }}
    dataAttributes={dataAttributes}
    href={href}
    type="link"
  >
    {logoElement}
    {name}
  </Button>
);

export const TwitterButton = socialMediaButtonFactory(
  'Twitter',
  tokens.colors.brandTwitter,
  <TwitterBrandIcon />,
);

export const FacebookButton = socialMediaButtonFactory(
  'Facebook',
  tokens.colors.brandFacebook,
  <FacebookRoundBrandIcon />,
);

export const GoogleButton = socialMediaButtonFactory(
  'Google',
  tokens.colors.brandGoogle,
  <GoogleColoredBrandIcon />,
);

export const LinkedinButton = socialMediaButtonFactory(
  'LinkedIn',
  tokens.colors.brandLinkedIn,
  <LinkedinBrandIcon />,
);
