import React from 'react';
import PropTypes from 'prop-types';

const CustomHeader = ({ section, subSection, description }) => (
  <header className="dc-u-bgg-chambray-cloudburst dc-u-pb-32 dc-u-pt-32 dc-u-pt-48 dc-u-ph-32">
    <p className="dc-chapeau-title dc-u-color-secondary dc-u-mb-0">{section}</p>
    <h1 className="dc-h3 dc-u-color-white dc-u-mv-4">{subSection}</h1>
    <p className="dc-u-color-white dc-u-mv-none">{description}</p>
  </header>
);

CustomHeader.propTypes = {
  section: PropTypes.string.isRequired,
  subSection: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CustomHeader;
