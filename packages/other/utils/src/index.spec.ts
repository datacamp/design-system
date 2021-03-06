import childrenOfType from './childrenOfType';
import computeDataAttributes from './computeDataAttributes';
import hexColorLuminance from './hexColorLuminance';
import hexToRgbaColor from './hexToRgbaColor';
import isChildType from './isChildType';
import ssrSafeNotFirstChildSelector from './ssrSafeNotFirstChildSelector';

import * as utils from '.';

describe('waffles-utils', () => {
  it('exposes all the utils', () => {
    expect(utils).toEqual({
      childrenOfType,
      computeDataAttributes,
      hexColorLuminance,
      hexToRgbaColor,
      isChildType,
      ssrSafeNotFirstChildSelector,
    });
  });
});
