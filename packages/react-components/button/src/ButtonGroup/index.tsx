import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ClassNames } from '@emotion/core';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import Button, { ButtonProps } from '../Button';

interface ButtonGroupProps {
  children: React.ReactElement<ButtonProps>[];
  className?: string;
}

const ButtonGroup = ({
  children,
  className,
}: ButtonGroupProps): React.ReactElement => {
  const childrenProps = React.Children.map(children, child => {
    return child === null
      ? { appearance: undefined, size: undefined }
      : child.props;
  });

  if (!childrenProps.every(({ size }) => size === childrenProps[0].size)) {
    throw Error('All Buttons in ButtonGroup must be the same size');
  }

  return (
    <div
      className={className}
      css={{ display: 'inline-flex', whiteSpace: 'nowrap' }}
    >
      <ClassNames>
        {({ css }) =>
          React.Children.map(children, (child, index) => {
            if (child === null) return null;
            return React.cloneElement(child, {
              className: css({
                marginLeft:
                  index > 0 && childrenProps[0].appearance !== 'primary'
                    ? tokens.size.space[16].value
                    : 0,
              }),
            });
          })
        }
      </ClassNames>
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(childrenOfType(Button)).isRequired,
};

export default ButtonGroup;
