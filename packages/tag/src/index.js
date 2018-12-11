import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isNil } from 'lodash';
import styled from 'styled-components';

import './index.css';

import { getColor, getContrastColor } from '@datacamp/waffles-core/colors';

const Tag = ({ color, children, extraClass, rounded, textColor }) => {
  const Tag = styled.div`
    background-color: ${getColor(color) || getColor('primaryLightest')};
    color: ${getContrastColor(color)};
  `;

  return (
    <Tag
      className={cx(
        'dc-tag',
        {
          'dc-tag--hue': color,
          'dc-u-brad-all': rounded,
        },
        isNil(textColor) && getContrastColor(color),
        extraClass
      )}
    >
      {children}
    </Tag>
  );
};
Tag.defaultProps = {
  color: undefined,
  extraClass: undefined,
  rounded: false,
  textColor: undefined,
};

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(getColor.validColors),
  extraClass: PropTypes.string,
  rounded: PropTypes.bool,
  textColor: PropTypes.string,
};

export default Tag;
