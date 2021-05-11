// eslint-disable-next-line filenames/match-exported
import {
  border,
  colors as colorTokens,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@datacamp/waffles-tokens';
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
  border-radius: ${border.radius};
  overflow: hidden;
  margin-top: 8px;
`;

const itemStyle = css`
  height: 100px;
  padding: 16px;
`;

const itemLabelStyle = css`
  font-family: ${fontFamily.sansSerif};
  font-size: ${fontSize.h6};
  line-height: ${lineHeight.base};
`;

const MAX_ITEMS_PER_ROW = 4;

type ColorGridProps = {
  category: string;
  colors: Array<keyof typeof colorTokens>;
};

function ColorsGrid({ category, colors }: ColorGridProps): JSX.Element {
  const pickedColors = colorsFromTokens(colors, colorTokens);

  return (
    <Fragment>
      <Markdown.h3>{category}</Markdown.h3>
      <ul css={wrapperStyle}>
        {pickedColors.map((color, index) => {
          const labelColor = readableColor(
            color.value,
            colorTokens.navyText,
            colorTokens.white,
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
                  font-weight: ${fontWeight.bold};
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
