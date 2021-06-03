import Card from '@datacamp/waffles-card';
import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';

const dropdownStyle = css({
  '@media (min-width: 821px)': {
    top: 38,
  },
  position: 'absolute',
  right: 0,
  top: 44,
  zIndex: 99,
});

const cardStyle = css({
  overflow: 'hidden',
});

const listStyle = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

type DropdownProps = HTMLAttributes<HTMLDivElement>;

function Dropdown({ children, ...restProps }: DropdownProps): JSX.Element {
  return (
    <div css={dropdownStyle} {...restProps} role="menu">
      <Card css={cardStyle} elevation={4}>
        <ul css={listStyle}>{children}</ul>
      </Card>
    </div>
  );
}

export default Dropdown;
