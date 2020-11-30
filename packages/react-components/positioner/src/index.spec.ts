import Positioner from './Positioner';
import usePositioner from './usePositioner';

import ExportedPositioner, { usePositioner as exportedUsePositioner } from '.';

describe('exports', () => {
  it('exports the right thing', () => {
    expect(ExportedPositioner).toEqual(Positioner);
    expect(exportedUsePositioner).toEqual(usePositioner);
  });
});
