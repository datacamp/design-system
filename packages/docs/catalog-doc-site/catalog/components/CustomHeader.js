import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
/* @jsx jsx */
import { jsx } from '@emotion/core'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import React from 'react';

const CustomHeader = ({ section, subSection, description }) => (
  <header
    css={{
      backgroundColor: tokens.color.primary.navy.value.hex,
      paddingBottom: 32,
      paddingLeft: 32,
      paddingRight: 32,
      paddingTop: 48,
    }}
  >
    <p className="dc-chapeau-title dc-u-color-green dc-u-mb-0">{section}</p>
    <h1 className="dc-h3 dc-u-color-white dc-u-mv-4">{subSection}</h1>
    <p className="dc-u-color-white dc-u-mv-none">{description}</p>
  </header>
);

CustomHeader.propTypes = {
  description: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  subSection: PropTypes.string.isRequired,
};

export default CustomHeader;
