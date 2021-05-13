// eslint-disable-next-line filenames/match-exported
import { Children } from 'react';

function textFromChildren(children: React.ReactNode): string {
  let label = '';
  Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      label += child;
    }
  });
  return label;
}

export default textFromChildren;
