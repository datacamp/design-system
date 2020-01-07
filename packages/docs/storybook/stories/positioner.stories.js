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
          <div ref={bottomLeftRef} css={targetStyle}>
            bottomLeft target
          </div>
          <div ref={bottomRef} css={targetStyle}>
            bottom target
          </div>
          <div ref={bottomRightRef} css={targetStyle}>
            bottomRight target
          </div>
          <div ref={rightRef} css={targetStyle}>
            right target
          </div>
          <div />
          <div ref={leftRef} css={targetStyle}>
            left target
          </div>
          <div ref={topLeftRef} css={targetStyle}>
            topLeft target
          </div>
          <div ref={topRef} css={targetStyle}>
            top target
          </div>
          <div ref={topRightRef} css={targetStyle}>
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
  })
);
