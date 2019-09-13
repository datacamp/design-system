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
}: ButtonGroupProps): React.ReactElement => (
  <div
    className={className}
    css={{ display: 'inline-block', whiteSpace: 'nowrap' }}
  >
    <ClassNames>
      {({ css }) =>
        React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            className: css({
              marginLeft: index > 0 ? tokens.size.space[16].value : 0,
            }),
          })
        )
      }
    </ClassNames>
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(childrenOfType(Button).isRequired).isRequired,
};

export default ButtonGroup;
