import * as packageExports from '.';
import Input from './Input';
import Select from './Select';
import SelectOption from './Select/Option';

describe('package index', () => {
  it('exports Input, Select and SelectOption ', () => {
    expect(packageExports).toEqual({ Input, Select, SelectOption });
  });
});
