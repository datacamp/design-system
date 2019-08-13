import { render } from '@testing-library/react';
import fs from 'fs';
import React from 'react';

import Markdown from './Markdown';

const fullExample: string = fs
  .readFileSync(`${__dirname}/../../test/full-example.md`)
  .toString();

describe('<Markdown />', () => {
  it('renders', () => {
    const { container } = render(<Markdown source={fullExample} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
