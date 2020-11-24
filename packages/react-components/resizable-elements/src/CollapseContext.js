import React from 'react';

const CollapseContext = React.createContext({
  collapsed: false,
  toggle: () => {},
});

export default CollapseContext;
