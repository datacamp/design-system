import * as packageExports from '.';
import Input from './Input';

describe('package index', () => {
  it('exports the AlertModal & setAppElement', () => {
    expect(packageExports).toEqual({ Input });
  });
});
