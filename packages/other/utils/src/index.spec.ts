import * as utils from '.';
import computeDataAttributes from './computeDataAttributes';
import isChildType from './isChildType';
import ssrSafeNotFirstChildSelector from './ssrSafeNotFirstChildSelector';

describe('waffles-utils', () => {
  it('exposes all the utils', () => {
    expect(utils).toEqual({
      computeDataAttributes,
      isChildType,
      ssrSafeNotFirstChildSelector,
    });
  });
});
