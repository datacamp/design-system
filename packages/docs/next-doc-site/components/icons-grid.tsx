// eslint-disable-next-line filenames/match-exported
import * as allIcons from '@datacamp/waffles-icons';
import { border, colors } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

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

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${colors.beige400};
  margin-top: 8px;
  padding: 8px;
  width: 100%;
  border-radius: ${border.radius};
`;

const iconStyle = css`
  margin: 8px;
`;

type IconsGridProps = {
  variant: 'regular' | 'inverted' | 'brand';
};

function IconsGrid({ variant }: IconsGridProps): JSX.Element {
  const isInverted = variant === 'inverted';

  function renderIcons(icons: typeof regularIcons): JSX.Element {
    return (
      <div
        css={css`
          ${wrapperStyle}
          ${isInverted &&
          css`
            border: none;
          `};
          background-color: ${isInverted ? colors.navyLight : 'transparent'};
        `}
      >
        {icons.map((Icon, index) => (
          <Icon
            color={isInverted ? colors.white : colors.navyDark}
            css={iconStyle}
            key={`$icon-${index}`}
          />
        ))}
      </div>
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
