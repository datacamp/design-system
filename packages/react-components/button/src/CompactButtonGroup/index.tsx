import { ClassNames } from '@emotion/core';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

import Button, { ButtonProps } from '../Button';

interface CompactButtonGroupProps {
  /**
   * The content of the CompactButtonGroup to render. This must be a set of
   * Button components. All Buttons within a CompactButtonGroup must have the
   * same appearance, intent, size & disabled state.
   */
  children: React.ReactElement<ButtonProps>[];
  /**
   * Sets the css class of the rendered element. Can be used to apply custom
   * styles.
   */
  className?: string;
}

const CompactButtonGroup = ({
  children,
  className,
}: CompactButtonGroupProps): React.ReactElement => {
  const childrenProps = React.Children.map(children, ({ props }) => props);

  if (!childrenProps.every(({ size }) => size === childrenProps[0].size)) {
    throw Error('All Buttons in CompactButtonGroup must be the same size');
  }

  if (
    !childrenProps.every(
      ({ appearance, intent, disabled, size }) =>
        appearance === childrenProps[0].appearance &&
        disabled === childrenProps[0].disabled &&
        intent === childrenProps[0].intent &&
        size === childrenProps[0].size,
    )
  ) {
    throw Error(
      'All Buttons in compact CompactButtonGroup must have the same appearance, intent, size & disabled state',
    );
  }

  const buttonCount = React.Children.count(children);
  const radii = { 0: '4px 0px 0px 4px', [buttonCount - 1]: '0px 4px 4px 0px' };
  const isPrimaryButtonGroup = childrenProps[0].appearance === 'primary';
  return (
    <div
      className={className}
      css={{ display: 'inline-flex', whiteSpace: 'nowrap' }}
    >
      <ClassNames>
        {({ css }) =>
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              className: css({
                ':active': { transform: 'none' },
                ':focus': { boxShadow: 'none' },
                borderLeft:
                  index > 0 && isPrimaryButtonGroup
                    ? '1px solid rgba(5, 25, 45, 0.3)'
                    : undefined,
                borderRadius: radii[index] || '0px', // only round corners on first & last child
                margin: 0,
                marginLeft: index > 0 ? '-2px' : undefined, // so only 1 border shows between buttons
              }),
            });
          })
        }
      </ClassNames>
    </div>
  );
};

CompactButtonGroup.propTypes = {
  children: PropTypes.arrayOf(childrenOfType(Button).isRequired).isRequired,
} as React.WeakValidationMap<CompactButtonGroupProps>;

export default CompactButtonGroup;
