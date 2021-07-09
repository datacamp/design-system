import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { readableColor } from 'polished';
import { Fragment } from 'react';

import colorItemsPerRow from '../helpers/color-items-per-row';
import colorsFromTokens from '../helpers/colors-from-tokens';

import Markdown from './markdown-elements';

const wrapperStyle = css`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  border-radius: ${tokens.borderRadius.medium};
  overflow: hidden;
  margin-top: 8px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const itemStyle = css`
  height: 100px;
  padding: 16px;
`;

const itemLabelStyle = css`
  font-family: ${tokens.fontFamilies.sansSerif};
  font-size: ${tokens.fontSizes.medium};
  line-height: ${tokens.lineHeights.medium};
`;

const MAX_ITEMS_PER_ROW = 4;

type ColorGridProps = {
  category: string;
  colors: Array<keyof typeof tokens.colors>;
};

function ColorsGrid({ category, colors }: ColorGridProps): JSX.Element {
  const pickedColors = colorsFromTokens(colors, tokens.colors);

  return (
    <Fragment>
      <Markdown.h3>{category}</Markdown.h3>
      <ul css={wrapperStyle}>
        {pickedColors.map((color, index) => {
          const labelColor = readableColor(
            color.value,
            tokens.colors.navyDark,
            tokens.colors.white,
          );
          const denominator = colorItemsPerRow(
            pickedColors.length,
            index,
            MAX_ITEMS_PER_ROW,
          );

          return (
            <li
              css={css`
                ${itemStyle}
                background-color: ${color.value};
                color: ${labelColor};
                width: calc(100% / ${denominator});
              `}
              key={`${color.name}-${index}`}
            >
              <div
                css={css`
                  ${itemLabelStyle}
                  text-transform: capitalize;
                  font-weight: ${tokens.fontWeights.bold};
                  color: ${labelColor};
                `}
              >
                {color.name}
              </div>
              <div
                css={css`
                  ${itemLabelStyle}
                  color: ${labelColor};
                `}
              >
                {color.value}
              </div>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default ColorsGrid;
