import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Tooltip from './index';

describe('Tooltip', () => {
  ([
    'bottomLeft',
    'bottom',
    'bottomRight',
    'left',
    'right',
    'topLeft',
    'top',
    'topRight',
  ] as const).forEach((position) => {
    (['light', 'dark'] as const).forEach((appearance) => {
      it(`renders on the ${position} on the target`, async () => {
        const ref = React.createRef<HTMLDivElement>();
        const { baseElement } = await axeRender(
          <>
            <div
              css={{ height: 50, width: 50 }}
              data-test-id="target"
              ref={ref}
            />
            <Tooltip
              appearance={appearance}
              id="abc"
              position={position}
              target={ref}
              visible
            >
              tooltip text content
            </Tooltip>
          </>,
        );

        expect(baseElement).toMatchSnapshot();
      });
    });
  });
});
