import {
  FacebookRoundBrandIcon,
  GoogleColoredBrandIcon,
  LinkedinBrandIcon,
  TwitterBrandIcon,
} from '@datacamp/waffles-icons';
import { colors } from '@datacamp/waffles-tokens';
import React from 'react';
import tinycolor from 'tinycolor2';

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
        backgroundColor: tinycolor(color).setAlpha(0.15).toRgbString(),
        borderColor: color,
        color,
      },
      borderColor: colors.grey400,
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
  '#00acee',
  <TwitterBrandIcon />,
);

export const FacebookButton = socialMediaButtonFactory(
  'Facebook',
  '#1778f2',
  <FacebookRoundBrandIcon />,
);

export const GoogleButton = socialMediaButtonFactory(
  'Google',
  '#db4437',
  <GoogleColoredBrandIcon />,
);

export const LinkedinButton = socialMediaButtonFactory(
  'LinkedIn',
  '#0e76a8',
  <LinkedinBrandIcon />,
);
