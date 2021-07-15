import tokens from '@datacamp/waffles-tokens';
import React from 'react';

export interface BodyProps {
  /**
   * The content to render inside the Dialog. Should be used along with
   * `Dialog.Header`.
   */
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps): JSX.Element => (
  <div
    css={{
      flex: 'auto',
      overflowY: 'auto',
      paddingBottom: tokens.spacing.medium,
      paddingLeft: tokens.spacing.medium,
      paddingRight: tokens.spacing.medium,
    }}
    tabIndex={0} // must be focusable to allow keyboard scrolling
  >
    {children}
  </div>
);

export default Body;
