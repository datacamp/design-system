import { setAppElement } from 'react-modal';

import * as packageExports from '.';
import AlertDialog from './AlertDialog';

describe('package index', () => {
  it('exports the AlertModal & setAppElement', () => {
    expect(packageExports).toEqual({ AlertDialog, setAppElement });
  });
});
