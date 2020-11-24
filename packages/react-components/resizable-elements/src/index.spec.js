import { shallow } from 'enzyme';
import React from 'react';

import ResizableElements from '.';

describe('<ResizableElements />', () => {
  const createElement = (props) => shallow(<ResizableElements {...props} />);

  it('should render', () => {
    expect(createElement).not.toThrowError();
  });
});
