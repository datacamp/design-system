import Card from '@datacamp/waffles-card';
import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';

const dropdownStyle = css({
  display: 'flex',
  position: 'absolute',
  right: 0,
  top: 32,
  zIndex: 1000,
});

const wrapperStyle = css({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

type DropdownProps = HTMLAttributes<HTMLDivElement>;

function Dropdown(props: DropdownProps): JSX.Element {
  return (
    <div css={dropdownStyle} {...props} role="menu">
      <Card elevation={4}>
        <ul css={wrapperStyle}>{props.children}</ul>
      </Card>
    </div>
  );
}

export default Dropdown;
