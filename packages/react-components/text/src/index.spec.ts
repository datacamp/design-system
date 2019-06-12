import Text from './Text';
import * as components from '.';

describe('index', () => {
  it('exports all the components', () => {
    expect(components).toEqual({ Text });
  });
});
