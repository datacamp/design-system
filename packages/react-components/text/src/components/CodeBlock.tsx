import tokens from '@datacamp/waffles-tokens';
import {
  computeDataAttributes,
  ssrSafeNotFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/react';

import codeStyle from '../codeStyle';

export interface CodeBlockProps {
  /**
   * The code to display.
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
}

const preStyle = css({
  backgroundColor: tokens.colors.beige,
  border: 0,
  borderRadius: tokens.borderRadius.medium,
  lineHeight: tokens.lineHeights.medium,
  margin: 0,
  overflow: 'scroll',
  padding: `${tokens.spacing.xsmall} ${tokens.spacing.small}`,
  [ssrSafeNotFirstChildSelector]: {
    marginTop: 12,
  },
});

const CodeBlock = ({
  children,
  className,
  dataAttributes,
}: CodeBlockProps): JSX.Element => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <pre
      className={className}
      css={preStyle}
      tabIndex={0} // Must be keyboard focusable for keyboard scrolling
      {...parsedDataAttributes}
    >
      <code css={codeStyle}>{children}</code>
    </pre>
  );
};

export default CodeBlock;
