import { ChevronDownIcon, ChevronUpIcon } from '@datacamp/waffles-icons';
import { css } from '@emotion/react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import Avatar from './Avatar';

const buttonStyle = css({
  ':focus': {
    backgroundColor: 'red',
  },
  alignItems: 'center',
  border: 0,
  display: 'flex',
});

type ButtonProps = {
  isOpen: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isOpen, ...restProps }, ref) => {
    return (
      <button css={buttonStyle} {...restProps} ref={ref}>
        <Avatar />
        {isOpen ? (
          <ChevronUpIcon aria-hidden={true} />
        ) : (
          <ChevronDownIcon aria-hidden={true} />
        )}
      </button>
    );
  },
);

export default Button;
