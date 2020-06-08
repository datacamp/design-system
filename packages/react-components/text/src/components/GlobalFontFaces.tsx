import { css, Global } from '@emotion/core';
import React from 'react';

import monoFontFace from '../fontFaces/mono';
import regularFontFace from '../fontFaces/regular';

const allFontFaces = css(monoFontFace, regularFontFace);

const GlobalFontFaces = (): React.ReactElement => (
  <Global styles={allFontFaces} />
);

export default GlobalFontFaces;
