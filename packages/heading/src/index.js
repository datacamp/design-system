import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Heading = ({ children, element: elementProp, extraClass }) => {
  const Element = elementProp;
  return (
    <Element className={cx(`dc-${elementProp}`, extraClass)}>
      {children}
    </Element>
  );
};

Heading.defaultProps = {
  element: 'h2',
  extraClass: undefined,
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  extraClass: PropTypes.string,
};

export default Heading;
