import Positioner from '@datacamp/waffles-positioner';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import React from 'react';

const targetStyle = css({
  backgroundColor: 'red',
  height: 100,
  width: 100,
});

storiesOf('waffles-positioner', module).add('positioner', () =>
  React.createElement(() => {
    const bottomLeftRef = React.useRef();
    const bottomRef = React.useRef();
    const bottomRightRef = React.useRef();
    const rightRef = React.useRef();
    const leftRef = React.useRef();
    const topLeftRef = React.useRef();
    const topRef = React.useRef();
    const topRightRef = React.useRef();
    return (
      <>
        <div
          css={{
            display: 'grid',
            gridGap: '50px 50px',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr 1fr',
          }}
        >
          <div css={targetStyle} ref={bottomLeftRef}>
            bottomLeft target
          </div>
          <div css={targetStyle} ref={bottomRef}>
            bottom target
          </div>
          <div css={targetStyle} ref={bottomRightRef}>
            bottomRight target
          </div>
          <div css={targetStyle} ref={rightRef}>
            right target
          </div>
          <div />
          <div css={targetStyle} ref={leftRef}>
            left target
          </div>
          <div css={targetStyle} ref={topLeftRef}>
            topLeft target
          </div>
          <div css={targetStyle} ref={topRef}>
            top target
          </div>
          <div css={targetStyle} ref={topRightRef}>
            topRight target
          </div>
        </div>
        <Positioner position="bottomLeft" target={bottomLeftRef} visible>
          bottomLeft
        </Positioner>
        <Positioner position="bottom" target={bottomRef} visible>
          bottom
        </Positioner>
        <Positioner position="bottomRight" target={bottomRightRef} visible>
          bottomRight
        </Positioner>
        <Positioner position="right" target={rightRef} visible>
          right
        </Positioner>
        <Positioner position="left" target={leftRef} visible>
          left
        </Positioner>
        <Positioner position="topLeft" target={topLeftRef} visible>
          topLeft
        </Positioner>
        <Positioner position="top" target={topRef} visible>
          top
        </Positioner>
        <Positioner position="topRight" target={topRightRef} visible>
          topRight
        </Positioner>
      </>
    );
  }),
);
