import tokens from '@datacamp/waffles-tokens';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';

import codeStyle from '../codeStyle';

export interface CodeProps {
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

const style = css(codeStyle, {
  backgroundColor: tokens.colors.beige,
  marginLeft: 2,
  marginRight: 4,
  paddingBottom: 0,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 0,
});

const Code = ({
  children,
  className,
  dataAttributes,
}: CodeProps): JSX.Element => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <code className={className} css={style} {...parsedDataAttributes}>
      {children}
    </code>
  );
};

export default Code;
