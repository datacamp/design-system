import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { ReactElement } from 'react';

import baseStyle from '../baseStyle';

interface LinkProps {
  /**
   * The content of the Link.
   */
  children: string;
  /**
   * Sets the css class of the rendered element. Can be used to apply custom
   * styles.
   */
  className?: string;
  /**
   * As with all the other waffles components, dataAttributes can be used to set
   * data- html attributes on the element.
   */
  dataAttributes?: { [key: string]: string };
  /**
   * The url to navigate to, when the user clicks.
   */
  href: string;
}

const linkStyle = css(baseStyle, {
  color: tokens.color.opaque.primary.value.hex,
  cursor: 'pointer',
  fontSize: tokens.size.font[300].value,
  fontWeight: tokens.fontWeight.regular.value,
  lineHeight: tokens.size.font.base.value,
  textDecoration: 'underline',
});

const InternalLink = ({
  className,
  dataAttributes,
  children,
  innerRef,
  href,
}: LinkProps & { innerRef?: React.Ref<HTMLAnchorElement> }): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);
  return (
    <a
      className={className}
      css={linkStyle}
      href={href}
      ref={innerRef}
      {...parsedDataAttributes}
    >
      {children}
    </a>
  );
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <InternalLink {...props} innerRef={ref} />
));

export default Link;
