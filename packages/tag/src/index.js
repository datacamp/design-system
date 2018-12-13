import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isNil } from 'lodash';
import styled from 'styled-components';

import './index.css';

import { getColor, getContrastColor } from '@datacamp/waffles-core';

const Tag = ({ color, children, extraClass, rounded, textColor }) => {
  const TagStyled = styled.div`
    background-color: ${getColor(color) || getColor('primaryLightest')};
    color: ${(isNil(textColor) && getContrastColor(color)) ||
      getColor(textColor)};
  `;

  return (
    <TagStyled
      className={cx(
        'dc-tag',
        {
          'dc-tag--hue': color,
          'dc-u-brad-all': rounded,
        },
        extraClass
      )}
    >
      {children}
    </TagStyled>
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
