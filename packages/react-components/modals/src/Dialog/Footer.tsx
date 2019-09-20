import Button, { ButtonGroup } from '@datacamp/waffles-button';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import { childrenOfType, nChildren } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';

export interface FooterProps {
  children: React.ReactElement | React.ReactElement[];
}

const baseStyle = css({
  boxShadow: '0px -1px 0px 0px rgb(230, 234, 235)',
  display: 'flex',
  padding: tokens.size.space[16].value,
});

const twoChildrenStyle = css(baseStyle, {
  justifyContent: 'space-between',
});

const defaultStyle = css(baseStyle, {
  justifyContent: 'space-around',
  textAlign: 'center',
});

const Footer = ({ children }: FooterProps): React.ReactElement => (
  <div
    css={React.Children.count(children) === 2 ? twoChildrenStyle : defaultStyle}
  >
    {children}
  </div>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    nChildren(
      2,
      PropTypes.arrayOf(
        PropTypes.oneOfType([
          childrenOfType(Button),
          childrenOfType(ButtonGroup),
        ])
      )
    ),
    PropTypes.oneOfType([childrenOfType(ButtonGroup), childrenOfType(Button)])
      .isRequired,
  ]),
};

export default Footer;
