// eslint-disable-next-line filenames/match-exported
import * as allIcons from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import Preview from './preview';

const brandIcons = Object.entries(allIcons)
  .filter((icon) => {
    const [name] = icon;
    return /BrandIcon$/.test(name);
  })
  .map((iconData) => iconData[1]);

const invertedIcons = Object.entries(allIcons)
  .filter((icon) => {
    const [name] = icon;
    return /InvertedIcon$/.test(name);
  })
  .map((iconData) => iconData[1]);

const regularIcons = Object.entries(allIcons)
  .filter((icon) => {
    const [name] = icon;
    return !/InvertedIcon|BrandIcon$/.test(name);
  })
  .map((iconData) => iconData[1]);

const iconStyle = css`
  margin: 8px;
`;

type IconsGridProps = {
  variant?: 'regular' | 'inverted' | 'brand';
};

function IconsGrid({ variant = 'regular' }: IconsGridProps): JSX.Element {
  const isInverted = variant === 'inverted';

  function renderIcons(icons: typeof regularIcons): JSX.Element {
    return (
      <Preview isInverted={isInverted}>
        {icons.map((Icon, index) => (
          <Icon
            color={isInverted ? tokens.colors.white : tokens.colors.navyDark}
            css={iconStyle}
            key={`$icon-${index}`}
          />
        ))}
      </Preview>
    );
  }

  if (variant === 'inverted') {
    return renderIcons(invertedIcons);
  }
  if (variant === 'brand') {
    return renderIcons(brandIcons);
  }

  return renderIcons(regularIcons);
}

export default IconsGrid;
