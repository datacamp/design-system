import { setAppElement } from 'react-modal';

import * as packageExports from '.';
import AlertDialog from './AlertDialog';
import Dialog from './Dialog';
import Panel from './Panel';

describe('package index', () => {
  it('exports the AlertModal & setAppElement', () => {
    expect(packageExports).toEqual({
      AlertDialog,
      Dialog,
      Panel,
      setAppElement,
    });
  });
});
