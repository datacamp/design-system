import * as packageExports from '.';
import Input from './Input';
import Select from './Select';

describe('package index', () => {
  it('exports the AlertModal & setAppElement', () => {
    expect(packageExports).toEqual({ Input, Select });
  });
});
