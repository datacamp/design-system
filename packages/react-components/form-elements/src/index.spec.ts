import * as packageExports from '.';
import Input from './Input';
import RadioList from './RadioList/index';
import Radio from './RadioList/Radio';
import Select from './Select';
import SelectOption from './Select/Option';

describe('package index', () => {
  it('exports Input, Radio, RadioList, Select and SelectOption ', () => {
    expect(packageExports).toEqual({
      Input,
      Radio,
      RadioList,
      Select,
      SelectOption,
    });
  });
});
