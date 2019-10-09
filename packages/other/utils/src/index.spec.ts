import * as utils from '.';
import computeDataAttributes from './computeDataAttributes';
import isChildType from './isChildType';
import ssrSafeFirstChildSelector from './ssrSafeFirstChildSelector';

describe('waffles-utils', () => {
  it('exposes all the utils', () => {
    expect(utils).toEqual({
      computeDataAttributes,
      isChildType,
      ssrSafeFirstChildSelector,
    });
  });
});
