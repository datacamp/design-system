import { css, Global } from '@emotion/core';
import React from 'react';

import boldFontFace from '../fontFaces/bold';
import lightFontFace from '../fontFaces/light';
import monoFontFace from '../fontFaces/mono';
import regularFontFace from '../fontFaces/regular';

const allFontFaces = css(
  boldFontFace,
  lightFontFace,
  monoFontFace,
  regularFontFace,
);

const GlobalFontFaces = (): React.ReactElement => (
  <Global styles={allFontFaces} />
);

export default GlobalFontFaces;
