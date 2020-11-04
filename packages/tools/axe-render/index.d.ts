/* eslint-disable filenames/match-exported */
import { render } from '@testing-library/react';

declare const axeRender: (
  ui: Parameters<typeof render>[0],
  options?: Parameters<typeof render>[1],
) => Promise<ReturnType<typeof render>>;

export default axeRender;
