import React from 'react';

const CollapseContext = React.createContext({
  collapsedFirstElement: false,
  collapsedLastElement: false,
  toggleFirstElement: () => {},
  toggleLastElement: () => {},
});

export default CollapseContext;
