import { render } from '@testing-library/react';

import LogomarkSpinner from './LogomarkSpinner';

describe('LogomarkSpinner', () => {
  it('renders with default props', () => {
    const { container } = render(<LogomarkSpinner />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with a custom color', () => {
    const { container } = render(<LogomarkSpinner color="red" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with a custom size', () => {
    const { container } = render(<LogomarkSpinner size="200px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
