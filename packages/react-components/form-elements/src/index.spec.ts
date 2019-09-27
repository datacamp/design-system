import * as packageExports from '.';
import Input from './Input';
import RadioList from './RadioList/index';
import Radio from './RadioList/Radio';

describe('package index', () => {
  it('exports the AlertModal & setAppElement', () => {
    expect(packageExports).toEqual({ Input, Radio, RadioList });
  });
});
