import { css } from '@emotion/core';
import React, { useEffect } from 'react';

import CollapseContext from './CollapseContext';

const clip = (value: number, min = 0, max = Infinity): number =>
  Math.min(Math.max(value, min), max);

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
  children: React.ReactNode;
  minSize: number;
  orientation: 'row' | 'column';
  proportions: number[];
}

interface ResizeableElementsState {
  collapsedFirstElement: boolean;
  collapsedLastElement: boolean;
  draggingDiff: number;
  draggingIndex: number;
  draggingMax?: number;
  draggingMin?: number;
  sizes: number[] | null;
  startDraggingAt?: number;
}

const ResizableElements = ({
  children = null,
  minSize = 30,
  orientation = 'row',
  proportions,
}: ResizableElementsProps): React.ReactElement => {
  const [state, setState] = React.useState<ResizeableElementsState>({
    collapsedFirstElement: false,
    collapsedLastElement: false,
    draggingDiff: 0,
    draggingIndex: -1,
    sizes: null,
  });

  const nbChildren = React.Children.count(children);

  useEffect(() => {
    const childWidth = 100 / nbChildren;

    setState({
      ...state,
      sizes:
        proportions === null
          ? React.Children.map(children, () => childWidth) || null
          : proportions,
    });
  }, [children, nbChildren, proportions, state]);

  const parentRef = React.useRef<HTMLDivElement>(null);

  const startDragging = (index: number) => (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    const { sizes } = state;
    const orientationConf = orientationMap[orientation];
    if (!parentRef.current || sizes === null) return;
    const parentBox = parentRef.current.getBoundingClientRect();
    const parentSize = parentBox[orientationConf.adjustableDimension];
    const parentOffset = parentBox[orientationConf.offset];
    let draggingMin = (-sizes[index] / 100) * parentSize;
    let draggingMax = sizes[index + 1]
      ? (sizes[index + 1] / 100) * parentSize
      : event[orientationConf.clientPosition] - (parentOffset + parentSize);

    draggingMin += minSize;
    draggingMax -= minSize;

    // state is only used in later setState callbacks, and causes linter warnings due to https://github.com/yannickcr/eslint-plugin-react/issues/1697
    setState({
      ...state,
      draggingDiff: 0,
      draggingIndex: index,
      draggingMax,
      draggingMin,
      startDraggingAt: event[orientationConf.clientPosition],
    });
  };

  const drag = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const orientationConf = orientationMap[orientation];
    const clientLoc = event[orientationConf.clientPosition];
    setState((oldState) => {
      const { draggingMax, draggingMin, startDraggingAt } = oldState;
      return {
        ...oldState,
        draggingDiff: clip(
          clientLoc - (startDraggingAt ?? 0),
          draggingMin,
          draggingMax,
        ),
      };
    });
  };

  const stopDragging = (): void => {
    setState((prevState) => {
      const {
        collapsedFirstElement,
        collapsedLastElement,
        draggingDiff,
        draggingIndex,
        sizes,
      } = prevState;
      const orientationConf = orientationMap[orientation];
      if (!parentRef.current || !sizes) return prevState;
      const parentBox = parentRef.current.getBoundingClientRect();
      const parentSize = parentBox[orientationConf.adjustableDimension];
      const newSizes = [...sizes];
      const diff = (draggingDiff / parentSize) * 100;
      const minProportion = (minSize / parentSize) * 100;
      if (draggingIndex === 0 && collapsedFirstElement) {
        // uncollapse first element
        newSizes[0] = minProportion + diff;
        newSizes[1] = sizes[1] + sizes[0] - newSizes[0];
      } else if (draggingIndex === nbChildren - 2 && collapsedLastElement) {
        // uncollapse last element
        newSizes[draggingIndex + 1] = minProportion - diff;
        newSizes[draggingIndex] =
          sizes[draggingIndex] +
          sizes[draggingIndex + 1] -
          newSizes[draggingIndex + 1];
      } else {
        newSizes[draggingIndex] = sizes[draggingIndex] + diff;
        newSizes[draggingIndex + 1] = sizes[draggingIndex + 1] - diff;
      }

      return {
        collapsedFirstElement:
          draggingIndex === 0
            ? newSizes[0] <= minProportion
            : collapsedFirstElement,
        collapsedLastElement:
          draggingIndex === nbChildren - 2
            ? newSizes[nbChildren - 1] <= minProportion
            : collapsedLastElement,
        draggingDiff: 0,
        draggingIndex: -1,
        draggingMax: undefined,
        draggingMin: undefined,
        sizes: newSizes,
        startDraggingAt: undefined,
      };
    });
  };

  const toggleFirstElement = (): void => {
    setState((oldState) => ({
      ...oldState,
      collapsedFirstElement: !oldState.collapsedFirstElement,
    }));
  };

  const toggleLastElement = (): void => {
    setState((oldState) => ({
      ...oldState,
      collapsedLastElement: !oldState.collapsedLastElement,
    }));
  };

  const { collapsedFirstElement, collapsedLastElement, sizes } = state;
  const orientationConf = orientationMap[orientation];
  const splitterCorrection = ((nbChildren - 1) * 5) / nbChildren;

  return (
    <div
      css={css({
        height: '100%',
        position: 'relative',
        width: '100%',
      })}
      ref={parentRef}
    >
      <CollapseContext.Provider
        value={{
          collapsedFirstElement,
          collapsedLastElement,
          toggleFirstElement,
          toggleLastElement,
        }}
      >
        {state.draggingIndex !== -1 && (
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
          let sizePerc = 0;
          let sizePx = 0;
          const collapsed =
            (index === 0 && collapsedFirstElement) ||
            (index === nbChildren - 1 && collapsedLastElement);
          if (collapsed || !sizes) {
            sizePx = minSize;
          } else {
            sizePerc = sizes[index];
            if (index === 1 && collapsedFirstElement) {
              sizePerc += sizes[index - 1];
              sizePx -= minSize;
            }
            if (index === nbChildren - 2 && collapsedLastElement) {
              sizePerc += sizes[index + 1];
              sizePx -= minSize;
            }
          }
          return (
            <React.Fragment>
              <div
                css={{
                  float: 'left',
                  overflow: 'hidden',
                  [orientationConf.fixedDimension]: '100%',
                  position: 'relative',
                }}
                style={{
                  [orientationConf.adjustableDimension]: `calc(${sizePerc}% + ${
                    sizePx - splitterCorrection
                  }px)`,
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
                    state.draggingIndex === index && {
                      backgroundColor: '#e5e1da',
                    },
                    { ':hover': { backgroundColor: '#e5e1da' } },
                  )}
                  onMouseDown={startDragging(index)}
                  role="separator"
                  style={{
                    [orientationConf.adjustablePosition]:
                      state.draggingIndex === index
                        ? `${state.draggingDiff}px`
                        : '0px',
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </CollapseContext.Provider>
    </div>
  );
};

export default ResizableElements;
