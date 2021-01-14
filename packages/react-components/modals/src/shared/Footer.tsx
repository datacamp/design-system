import Button, { ButtonGroup } from '@datacamp/waffles-button';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/react';
import { childrenOfType, nChildren } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

export interface FooterProps {
  children: ReactElement | ReactElement[];
}

const baseStyle = css({
  boxShadow: `0px -1px 0px 0px ${tokens.color.neutral.grey200.value.hex}`,
  display: 'flex',
  flex: 'none',
  padding: tokens.size.space[16].value,
});

const twoChildrenStyle = css(baseStyle, {
  justifyContent: 'space-between',
});

const defaultStyle = css(baseStyle, {
  justifyContent: 'space-around',
  textAlign: 'center',
});

const Footer = ({ children }: FooterProps): ReactElement => (
  <div
    css={React.Children.count(children) === 2 ? twoChildrenStyle : defaultStyle}
  >
    {children}
  </div>
);

Footer.propTypes = {
  /**
   * Accepts either 1 or 2 children. These can be either Buttons or
   * ButtonGroups.
   */
  children: PropTypes.oneOfType([
    nChildren(
      2,
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          childrenOfType(Button),
          childrenOfType(ButtonGroup),
        ]),
      ),
    ),
    PropTypes.oneOfType([childrenOfType(ButtonGroup), childrenOfType(Button)])
      .isRequired,
  ]),
};

export default Footer;
