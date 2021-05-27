import { css } from '@emotion/react';
import React, { useCallback } from 'react';

import calculateSizes from './calculateSizes';
import CollapseContext from './CollapseContext';
import reducer from './reducer';

const orientationMap = {
  column: {
    adjustableDimension: 'height',
    adjustablePosition: 'top',
    clientPosition: 'clientY',
    fixedDimension: 'width',
    offset: 'y',
  },
  row: {
    adjustableDimension: 'width',
    adjustablePosition: 'left',
    clientPosition: 'clientX',
    fixedDimension: 'height',
    offset: 'x',
  },
} as const;

interface ResizableElementsProps {
  /**
   * The elements to make "resizable". They will each be rendered inside a div that can change in size.
   */
  children: React.ReactNode[];
  /**
   * The size of a "collapsed" element in pixels.
   */
  collapsedSize?: number;
  /**
   * An array of percentage values. This should be the same length as the number of elements.
   * This determines the initial sizes of the elements. When not provided the elements will
   * default to equal sizes.
   */
  initialProportions?: number[];
  /**
   * The layout of the child elements.
   */
  orientation: 'row' | 'column';
}

const ResizableElements = ({
  children,
  collapsedSize = 30,
  initialProportions,
  orientation = 'row',
}: ResizableElementsProps): React.ReactElement => {
  const nbChildren = React.Children.count(children);

  const [
    {
      collapsedFirstElement,
      collapsedLastElement,
      draggingState,
      sizePercentages,
    },
    dispatch,
  ] = React.useReducer(reducer, {
    collapsedFirstElement: false,
    collapsedLastElement: false,
    collapsedSize,
    sizePercentages:
      initialProportions ||
      [...Array(nbChildren).keys()].map(() => 100 / nbChildren),
  });

  const containerRef = React.useRef<HTMLDivElement>(null);

  const {
    adjustableDimension,
    adjustablePosition,
    clientPosition,
    fixedDimension,
    offset,
  } = orientationMap[orientation];

  const startDragging = useCallback(
    (index: number) => (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ): void => {
      if (!containerRef.current) return;
      const parentBox = containerRef.current.getBoundingClientRect();
      const parentSize = parentBox[adjustableDimension];
      const parentOffset = parentBox[offset];
      const startPosition = event[clientPosition];

      dispatch({
        index,
        parentOffset,
        parentSize,
        startPosition,
        type: 'startDragging',
      });
    },
    [adjustableDimension, clientPosition, offset],
  );

  const drag = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      const clientLoc = event[clientPosition];
      dispatch({ clientLoc, type: 'dragUpdate' });
    },
    [clientPosition],
  );

  const stopDragging = useCallback((): void => {
    if (!containerRef.current) return;

    const parentBox = containerRef.current.getBoundingClientRect();
    const parentSize = parentBox[adjustableDimension];

    dispatch({ parentSize, type: 'stopDragging' });
  }, [adjustableDimension]);

  const toggleFirstElement = useCallback((): void => {
    dispatch({ type: 'toggleFirstElement' });
  }, []);

  const toggleLastElement = useCallback((): void => {
    dispatch({ type: 'toggleLastElement' });
  }, []);

  const sizes = calculateSizes(
    sizePercentages,
    collapsedFirstElement,
    collapsedLastElement,
    collapsedSize,
  );

  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: orientation,
        height: '100%',
        position: 'relative',
        width: '100%',
      })}
      ref={containerRef}
    >
      {draggingState && (
        <div
          css={css({
            background: 'transparent',
            height: '100%',
            left: 0,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 100,
          })}
          onMouseMove={drag}
          onMouseUp={stopDragging}
          role="separator"
        />
      )}
      {React.Children.map(children, (child, index) => {
        return (
          <CollapseContext.Provider
            value={{
              collapsedFirstElement,
              collapsedLastElement,
              toggleFirstElement,
              toggleLastElement,
            }}
          >
            <div
              css={{
                [fixedDimension]: '100%',
                float: 'left',
                position: 'relative',
              }}
              style={{
                [adjustableDimension]: sizes[index],
              }}
            >
              {child}
            </div>
            {index < nbChildren - 1 && (
              <div
                css={css(
                  orientation === 'column' && {
                    cursor: 'row-resize',
                    height: 5,
                    width: '100%',
                  },
                  orientation === 'row' && {
                    cursor: 'col-resize',
                    height: '100%',
                    width: 5,
                  },
                  draggingState &&
                    draggingState.draggingIndex === index && {
                      backgroundColor: '#e5e1da',
                    },
                  { ':hover': { backgroundColor: '#e5e1da' } },
                )}
                onMouseDown={startDragging(index)}
                role="separator"
                style={{
                  [adjustablePosition]:
                    draggingState && draggingState.draggingIndex === index
                      ? `${draggingState.draggingDiff}px`
                      : '0px',
                }}
              />
            )}
          </CollapseContext.Provider>
        );
      })}
    </div>
  );
};

export default ResizableElements;
