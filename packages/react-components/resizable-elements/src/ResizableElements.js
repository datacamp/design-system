import './index.css';

import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import CollapseContext from './CollapseContext';

const clip = (value, min, max) => Math.min(Math.max(value, min), max);

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
};

class ResizableElements extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    minSize: PropTypes.number,
    orientation: PropTypes.oneOf(['row', 'column']),
    proportions: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {
    children: null,
    minSize: 30,
    orientation: 'row',
    proportions: null,
  };

  state = {
    collapsedFirstElement: false,
    collapsedLastElement: false,
    draggingDiff: 0,
    draggingIndex: -1,
    startDraggingAt: null,
  };

  componentWillMount() {
    const { children, proportions } = this.props;
    const nbChildren = this.getNumberOfElements();
    const childWidth = 100 / nbChildren;

    this.setState({
      // TODO: Need to split in sizesPerc and sizesPx to remove calculations from render function.
      //       This will also make auto-uncollapsing trivial.
      sizes:
        proportions === null
          ? React.Children.map(children, () => childWidth)
          : proportions,
    });
  }

  getNumberOfElements() {
    const { children } = this.props;
    return React.Children.count(children);
  }

  parentRef = React.createRef();

  startDragging = (index) => (event) => {
    const { sizes } = this.state;
    const { minSize, orientation } = this.props;
    const orientationConf = orientationMap[orientation];
    const parentBox = this.parentRef.current.getBoundingClientRect();
    const parentSize = parentBox[orientationConf.adjustableDimension];
    const parentOffset = parentBox[orientationConf.offset];
    let draggingMin = (-sizes[index] / 100) * parentSize;
    let draggingMax = sizes[index + 1]
      ? (sizes[index + 1] / 100) * parentSize
      : event[orientationConf.clientPosition] - (parentOffset + parentSize);

    draggingMin += minSize;
    draggingMax -= minSize;

    // state is only used in later setState callbacks, and causes linter warnings due to https://github.com/yannickcr/eslint-plugin-react/issues/1697
    this.setState({
      draggingDiff: 0,
      draggingIndex: index,
      draggingMax,
      draggingMin,
      startDraggingAt: event[orientationConf.clientPosition],
    });
  };

  drag = (event) => {
    // Get it out the event, to persist event property
    const { orientation } = this.props;
    const orientationConf = orientationMap[orientation];
    const clientLoc = event[orientationConf.clientPosition];
    this.setState(({ draggingMax, draggingMin, startDraggingAt }) => ({
      draggingDiff: clip(clientLoc - startDraggingAt, draggingMin, draggingMax),
    }));
  };

  stopDragging = () => {
    this.setState(
      (
        {
          collapsedFirstElement,
          collapsedLastElement,
          draggingDiff,
          draggingIndex,
          sizes,
        },
        { minSize, orientation },
      ) => {
        const nbElements = this.getNumberOfElements();
        const orientationConf = orientationMap[orientation];
        const parentBox = this.parentRef.current.getBoundingClientRect();
        const parentSize = parentBox[orientationConf.adjustableDimension];
        const newSizes = [...sizes];
        const diff = (draggingDiff / parentSize) * 100;
        const minProportion = (minSize / parentSize) * 100;
        if (draggingIndex === 0 && collapsedFirstElement) {
          // uncollapse first element
          newSizes[0] = minProportion + diff;
          newSizes[1] = sizes[1] + sizes[0] - newSizes[0];
        } else if (draggingIndex === nbElements - 2 && collapsedLastElement) {
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
            draggingIndex === nbElements - 2
              ? newSizes[nbElements - 1] <= minProportion
              : collapsedLastElement,
          draggingDiff: 0,
          draggingIndex: -1,
          draggingMax: null,
          draggingMin: null,
          sizes: newSizes,
          startDraggingAt: null,
        };
      },
    );
  };

  toggleFirstElement = () => {
    this.setState(({ collapsedFirstElement }) => ({
      collapsedFirstElement: !collapsedFirstElement,
    }));
  };

  toggleLastElement = () => {
    this.setState(({ collapsedLastElement }) => ({
      collapsedLastElement: !collapsedLastElement,
    }));
  };

  render() {
    const { collapsedFirstElement, collapsedLastElement, sizes } = this.state;
    const { children, minSize, orientation } = this.props;
    const orientationConf = orientationMap[orientation];
    const nbChildren = this.getNumberOfElements();
    const splitterCorrection = ((nbChildren - 1) * 5) / nbChildren;

    return (
      <div
        className={cx(`resizable-elements`, {
          'resizable-elements__column': orientation === 'column',
          'resizable-elements__row': orientation === 'row',
        })}
        ref={this.parentRef}
      >
        <CollapseContext.Provider
          value={{
            collapsedFirstElement,
            collapsedLastElement,
            toggleFirstElement: this.toggleFirstElement,
            toggleLastElement: this.toggleLastElement,
          }}
        >
          {this.state.draggingIndex !== -1 && (
            <div
              className="resizable-elements__mask"
              onMouseMove={this.drag}
              onMouseUp={this.stopDragging}
              role="separator"
            />
          )}
          {React.Children.map(children, (child, index) => {
            let sizePerc = 0;
            let sizePx = 0;
            const collapsed =
              (index === 0 && collapsedFirstElement) ||
              (index === nbChildren - 1 && collapsedLastElement);
            if (collapsed) {
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
                  style={{
                    float: 'left',
                    overflow: 'hidden',
                    [orientationConf.fixedDimension]: '100%',
                    [orientationConf.adjustableDimension]: `calc(${sizePerc}% + ${
                      sizePx - splitterCorrection
                    }px)`,
                    position: 'relative',
                  }}
                >
                  {child}
                </div>
                {index < nbChildren - 1 && (
                  <div
                    className={cx('resizable-elements__splitter', {
                      show: this.state.draggingIndex === index,
                    })}
                    onMouseDown={this.startDragging(index)}
                    role="separator"
                    style={{
                      [orientationConf.adjustablePosition]:
                        this.state.draggingIndex === index
                          ? `${this.state.draggingDiff}px`
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
  }
}

export default ResizableElements;
