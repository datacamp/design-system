import LogomarkSpinner from './LogomarkSpinner';

import * as moduleExports from '.';

describe('package index', () => {
  it('exports everything', () => {
    expect(moduleExports).toEqual({
      LogomarkSpinner,
    });
  });
});
