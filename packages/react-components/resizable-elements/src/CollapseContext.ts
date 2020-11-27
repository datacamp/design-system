import React from 'react';

const CollapseContext = React.createContext({
  collapsedFirstElement: false,
  collapsedLastElement: false,
  toggleFirstElement: (): void => {
    throw new Error(
      'Cannot call toggleFirstElement outside of ResizableElements',
    );
  },
  toggleLastElement: (): void => {
    throw new Error(
      'Cannot call toggleLastElement outside of ResizableElements',
    );
  },
});

export default CollapseContext;
