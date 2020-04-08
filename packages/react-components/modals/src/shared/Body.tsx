import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import React, { ReactElement, ReactNode } from 'react';

export interface BodyProps {
  /**
   * The content to render inside the Dialog. Should be used along with
   * `Dialog.Header`.
   */
  children: ReactNode;
}

const Body = ({ children }: BodyProps): ReactElement => (
  <div
    css={{
      flex: 'auto',
      overflowY: 'auto',
      paddingBottom: tokens.size.space[32].value,
      paddingLeft: tokens.size.space[32].value,
      paddingRight: tokens.size.space[32].value,
    }}
    tabIndex={0} // must be focusable to allow keyboard scrolling
  >
    {children}
  </div>
);

export default Body;
