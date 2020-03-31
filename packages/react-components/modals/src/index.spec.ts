import { setAppElement } from 'react-modal';

import AlertDialog from './AlertDialog';
import Dialog from './Dialog';
import Panel from './Panel';

import * as packageExports from '.';

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
