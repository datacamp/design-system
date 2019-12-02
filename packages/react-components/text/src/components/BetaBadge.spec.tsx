import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import BetaBadge from './BetaBadge';

describe('BetaBadge', () => {
  it('renders with the provided className', async () => {
    const { getByText } = await axeRender(<BetaBadge className="test-class" />);
    const element = getByText('Beta') as HTMLElement;
    expect(element).toHaveClass('test-class');
    expect(element).toMatchSnapshot();
  });
});
