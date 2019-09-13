import * as moduleExports from '.';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

describe('package index', () => {
  it('exports everything', () => {
    expect(moduleExports).toEqual({ ButtonGroup, default: Button });
  });
});
