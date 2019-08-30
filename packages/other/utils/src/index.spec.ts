import * as utils from '.';
import ssrSafeFirstChildSelector from './ssrSafeFirstChildSelector';

describe('waffles-utils', () => {
  it('exposes all the utils', () => {
    expect(utils).toEqual({ ssrSafeFirstChildSelector });
  });
});
