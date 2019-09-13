import * as moduleExports from '.';
import Button from './Button';

describe('package index', () => {
  it('exports everything', () => {
    expect(moduleExports).toEqual({ default: Button });
  });
});
