import computeDataAttributes from './computeDataAttributes';
import isChildType from './isChildType';
import ssrSafeNotFirstChildSelector from './ssrSafeNotFirstChildSelector';

import * as utils from '.';

describe('waffles-utils', () => {
  it('exposes all the utils', () => {
    expect(utils).toEqual({
      computeDataAttributes,
      isChildType,
      ssrSafeNotFirstChildSelector,
    });
  });
});
