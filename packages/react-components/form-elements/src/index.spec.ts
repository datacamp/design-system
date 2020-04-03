import Input from './Input';
import Label from './Label';
import RadioList from './RadioList/index';
import Radio from './RadioList/Radio';
import Select from './Select';
import SelectOption from './Select/Option';
import TextArea from './TextArea';

import * as packageExports from '.';

describe('package index', () => {
  it('exports all the components', () => {
    expect(packageExports).toEqual({
      Input,
      Label,
      Radio,
      RadioList,
      Select,
      SelectOption,
      TextArea,
    });
  });
});
