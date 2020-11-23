import Tooltip from '@datacamp/waffles-tooltip';
import { css } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import React from 'react';

const targetStyle = css({
  backgroundColor: 'red',
  height: 100,
  width: 100,
});

storiesOf('waffles-tooltip', module)
  .add('Tooltip light', () =>
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
          <Tooltip position="bottomLeft" target={bottomLeftRef} visible>
            bottomLeft tooltip content
          </Tooltip>
          <Tooltip position="bottom" target={bottomRef} visible>
            bottom tooltip content
          </Tooltip>
          <Tooltip position="bottomRight" target={bottomRightRef} visible>
            bottomRight tooltip content
          </Tooltip>
          <Tooltip position="right" target={rightRef} visible>
            right tooltip content
          </Tooltip>
          <Tooltip position="left" target={leftRef} visible>
            left tooltip content
          </Tooltip>
          <Tooltip position="topLeft" target={topLeftRef} visible>
            topLeft tooltip content
          </Tooltip>
          <Tooltip position="top" target={topRef} visible>
            top tooltip content
          </Tooltip>
          <Tooltip position="topRight" target={topRightRef} visible>
            topRight tooltip content
          </Tooltip>
        </>
      );
    }),
  )
  .add('Tooltip dark', () =>
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
          <Tooltip
            appearance="dark"
            position="bottomLeft"
            target={bottomLeftRef}
            visible
          >
            bottomLeft tooltip content
          </Tooltip>
          <Tooltip
            appearance="dark"
            position="bottom"
            target={bottomRef}
            visible
          >
            bottom tooltip content
          </Tooltip>
          <Tooltip
            appearance="dark"
            position="bottomRight"
            target={bottomRightRef}
            visible
          >
            bottomRight tooltip content
          </Tooltip>
          <Tooltip appearance="dark" position="right" target={rightRef} visible>
            right tooltip content
          </Tooltip>
          <Tooltip appearance="dark" position="left" target={leftRef} visible>
            left tooltip content
          </Tooltip>
          <Tooltip
            appearance="dark"
            position="topLeft"
            target={topLeftRef}
            visible
          >
            topLeft tooltip content
          </Tooltip>
          <Tooltip appearance="dark" position="top" target={topRef} visible>
            top tooltip content
          </Tooltip>
          <Tooltip
            appearance="dark"
            position="topRight"
            target={topRightRef}
            visible
          >
            topRight tooltip content
          </Tooltip>
        </>
      );
    }),
  );
