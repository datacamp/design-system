import Button from './Button';
import ButtonGroup from './ButtonGroup';
import CompactButtonGroup from './CompactButtonGroup';

import * as moduleExports from '.';

describe('package index', () => {
  it('exports everything', () => {
    expect(moduleExports).toEqual({
      ButtonGroup,
      CompactButtonGroup,
      default: Button,
    });
  });
});
