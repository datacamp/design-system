import { css } from '@emotion/react';

import Button from './Button';
import Dropdown from './Dropdown';
import useMenu from './useMenu';

const wrapperStyle = css({
  display: 'inline-block',
  position: 'relative',
});

const itemStyle = css({
  padding: 16,
  whiteSpace: 'nowrap',
});

const anchorStyle = css({
  ':focus': {
    backgroundColor: 'red',
  },
});

function UserAccountMenuButton(): JSX.Element {
  const { buttonProps, isOpen, itemProps } = useMenu(3);

  return (
    <div css={wrapperStyle}>
      <Button isOpen={isOpen} {...buttonProps} />
      {isOpen && (
        <Dropdown>
          <li css={itemStyle} tabIndex={-1}>
            <a
              css={anchorStyle}
              href="https://www.datacamp.com"
              {...itemProps[0]}
            >
              My Profile
            </a>
          </li>
          <li css={itemStyle} tabIndex={-1}>
            <a css={anchorStyle} href="www.datacamp2.com" {...itemProps[1]}>
              Account Settings
            </a>
          </li>
          <li css={itemStyle} tabIndex={-1}>
            <a css={anchorStyle} href="www.datacamp3.com" {...itemProps[2]}>
              Log Out
            </a>
          </li>
        </Dropdown>
      )}
    </div>
  );
}

export default UserAccountMenuButton;
