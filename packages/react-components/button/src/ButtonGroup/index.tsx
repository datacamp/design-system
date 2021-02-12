import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { childrenOfType, isChildType } from '@datacamp/waffles-utils';
import { ClassNames } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import CompactButtonGroup from '../CompactButtonGroup';
import {
  FacebookButton,
  GoogleButton,
  LinkedinButton,
  TwitterButton,
} from '../SocialMediaButtons';

interface ButtonGroupProps {
  children: React.ReactNode;
  /**
   * Sets the css class of the rendered element. Can be used to apply custom
   * styles.
   */
  className?: string;
}

const ButtonGroup = ({
  children,
  className,
}: ButtonGroupProps): React.ReactElement => {
  const sizes =
    React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return undefined;
      if (isChildType(child, Button)) return child.props.size || 'medium';
      if (isChildType(child, CompactButtonGroup)) {
        return child.props.children[0].props.size || 'medium'; // we already validate that all buttons in child group are the same size
      }
      return undefined;
    }) || [];

  if (!sizes.every((size) => size === sizes[0])) {
    throw Error('All Buttons in ButtonGroup must be the same size');
  }

  const gap =
    sizes[0] === 'small'
      ? tokens.size.space[8].value
      : tokens.size.space[16].value;

  return (
    <div
      className={className}
      css={{ display: 'inline-flex', whiteSpace: 'nowrap' }}
    >
      <ClassNames>
        {({ css, cx }) =>
          React.Children.map(children, (child, index) => {
            if (child === null) return null;
            const childElement = child as React.ReactElement<{
              className: string;
            }>;
            return React.cloneElement(childElement, {
              className: cx(
                css({ marginLeft: index > 0 ? gap : 0 }),
                childElement.props.className,
              ),
            });
          })
        }
      </ClassNames>
    </div>
  );
};

ButtonGroup.propTypes = {
  /**
   * The content of the ButtonGroup to render. This must be a set of Button
   * and/or CompactButtonGroup components. All Buttons within a ButtonGroup must
   * be the same size.
   */
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      childrenOfType(Button),
      childrenOfType(FacebookButton),
      childrenOfType(GoogleButton),
      childrenOfType(LinkedinButton),
      childrenOfType(TwitterButton),
      childrenOfType(CompactButtonGroup),
    ]),
  ).isRequired,
};

export default ButtonGroup;
