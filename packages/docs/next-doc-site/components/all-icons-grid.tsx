import * as allIcons from '@datacamp/waffles-icons';
import { Text } from '@datacamp/waffles-text';
import { css } from '@emotion/react';

import Preview from './preview';

const previewStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const iconStyle = css`
  display: flex;
  align-items: center;
  margin: 8px;
`;

const textStyle = css`
  padding-left: 8px;
`;

function AllIconsGrid(): JSX.Element {
  return (
    <Preview css={previewStyle}>
      {Object.entries(allIcons).map((iconData) => {
        const [name, Icon] = iconData;

        return (
          <div css={iconStyle} key={`$icon-${name}`}>
            <Icon />
            <Text css={textStyle}>{name}</Text>
          </div>
        );
      })}
    </Preview>
  );
}

export default AllIconsGrid;
