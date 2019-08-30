import * as utils from '.';
import computeDataAttributes from './computeDataAttributes';
import ssrSafeFirstChildSelector from './ssrSafeFirstChildSelector';

describe('waffles-utils', () => {
  it('exposes all the utils', () => {
    expect(utils).toEqual({ computeDataAttributes, ssrSafeFirstChildSelector });
  });
});
