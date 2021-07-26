import tokens from '@datacamp/waffles-tokens';
import {
  computeDataAttributes,
  ssrSafeNotFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import React from 'react';

import baseStyle from '../../baseStyle';

import ListItem from './ListItem';

interface ListProps {
  /**
   * The content to display. Should only be List.Item components
   */
  children: React.ReactNode;
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
   * Blah Blah Blah docs
   */
  ordered?: boolean;
}

const listStyle = css(baseStyle, {
  // add padding when nested
  '& &': {
    paddingLeft: tokens.spacing.medium,
  },
  listStylePosition: 'inside',
  margin: 0,
  padding: 0,
  [ssrSafeNotFirstChildSelector]: {
    marginTop: tokens.spacing.xsmall,
  },
});

const List = (props: ListProps): JSX.Element => {
  const { children, className, dataAttributes, ordered = false } = props;

  const parsedDataAttributes = computeDataAttributes(dataAttributes);
  const Element = ordered ? 'ol' : 'ul';

  return (
    <Element className={className} css={listStyle} {...parsedDataAttributes}>
      {children}
    </Element>
  );
};

List.Item = ListItem;

export default List;
