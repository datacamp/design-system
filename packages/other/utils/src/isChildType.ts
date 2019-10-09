import React from 'react';

const isChildType = <P extends {}>(
  child: React.ReactNode,
  type: React.ComponentType<P> | React.ExoticComponent<P>
): child is React.ReactElement<P> =>
  React.isValidElement(child) && child.type === type;

export default isChildType;
