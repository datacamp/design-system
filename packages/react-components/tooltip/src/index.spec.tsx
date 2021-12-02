import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import Tooltip from './index';

describe('Tooltip', () => {
  it('sets the dataAttributes on the tooltip', async () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = await axeRender(
      <>
        <section
          css={{ height: 50, width: 50 }}
          data-test-id="target"
          ref={ref}
        />
        <Tooltip
          appearance="dark"
          dataAttributes={{ test: 'example' }}
          id="abc"
          position="bottom"
          target={ref}
          visible
        >
          tooltip text content
        </Tooltip>
      </>,
    );

    const tooltipElement = container.querySelector('div');

    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement).toHaveAttribute('data-test', 'example');
  });

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
