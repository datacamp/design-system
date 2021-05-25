import CheckboxList from './CheckboxList';
import Checkbox from './CheckboxList/Checkbox';
import Input from './Input';
import Label from './Label';
import RadioList from './RadioList/index';
import Radio from './RadioList/Radio';
import RadioIcon from './RadioList/RadioIcon';
import Select from './Select';
import SelectOption from './Select/Option';
import Switch from './Switch';
import TextArea from './TextArea';

import * as packageExports from '.';

describe('package index', () => {
  it('exports all the components', () => {
    expect(packageExports).toEqual({
      Checkbox,
      CheckboxList,
      Input,
      Label,
      Radio,
      RadioIcon,
      RadioList,
      Select,
      SelectOption,
      Switch,
      TextArea,
    });
  });
});
