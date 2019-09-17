import Button from '@datacamp/waffles-button';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { childrenOfType } from 'airbnb-prop-types';
import React from 'react';

export interface FooterProps {
  children: React.ReactElement;
}

const Footer = ({ children }: FooterProps): React.ReactElement => (
  <div
    css={{
      boxShadow: '0px -1px 0px 0px rgb(230, 234, 235)',
      paddingBottom: tokens.size.space[16].value,
      paddingTop: tokens.size.space[16].value,
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

Footer.propTypes = {
  children: childrenOfType(Button).isRequired,
};

export default Footer;
