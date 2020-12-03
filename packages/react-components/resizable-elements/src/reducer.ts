interface State {
  collapsedFirstElement: boolean;
  collapsedLastElement: boolean;
  collapsedSize: number;
  /**
   * draggingState only exists while dragging.
   * It contains all the information about the current "resizing"
   */
  draggingState?: {
    /**
     * The current number of pixels change in size to the element being resized
     */
    draggingDiff: number;
    /**
     * The maximum possible draggingDiff value
     */
    draggingDiffMax: number;
    /**
     * The minimum possible draggingDiff value
     */
    draggingDiffMin: number;
    /**
     * The element currently being resized
     */
    draggingIndex: number;
    /**
     * The initial position before the resize was started
     */
    startDraggingAt: number;
  };
  sizePercentages: number[];
}

type Action =
  | {
      type: 'toggleFirstElement';
    }
  | { type: 'toggleLastElement' }
  | { clientLoc: number; type: 'dragUpdate' }
  | { parentSize: number; type: 'stopDragging' }
  | {
      index: number;
      parentOffset: number;
      parentSize: number;
      startPosition: number;
      type: 'startDragging';
    };

const clip = (value: number, min = 0, max = Infinity): number =>
  Math.min(Math.max(value, min), max);

/**
 * The reducer only stores proportions, and is independant of location.
 * The orientation etc. is handled by the component itself.
 * This means that pixel values are temporarily only needed for calculation, and come in through actions.
 */
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'toggleFirstElement':
      return { ...state, collapsedFirstElement: !state.collapsedFirstElement };

    case 'toggleLastElement':
      return { ...state, collapsedLastElement: !state.collapsedLastElement };

    // Initialises the draggingState based on current offsets and sizes.
    case 'startDragging': {
      const { collapsedSize, draggingState, sizePercentages } = state;
      const { index, parentOffset, parentSize, startPosition } = action;

      if (draggingState) throw new Error('Already dragging');

      let draggingDiffMin = (-sizePercentages[index] / 100) * parentSize;
      let draggingDiffMax = sizePercentages[index + 1]
        ? (sizePercentages[index + 1] / 100) * parentSize
        : startPosition - (parentOffset + parentSize);

      draggingDiffMin += collapsedSize;
      draggingDiffMax -= collapsedSize;

      return {
        ...state,
        draggingState: {
          draggingDiff: 0,
          draggingDiffMax,
          draggingDiffMin,
          draggingIndex: index,
          startDraggingAt: startPosition,
        },
      };
    }

    // Only updates draggingDiff value
    case 'dragUpdate': {
      const { draggingState } = state;
      if (!draggingState)
        throw new Error('Cannot fire dragUpdate without starting to drag');

      const {
        draggingDiffMax,
        draggingDiffMin,
        startDraggingAt,
      } = draggingState;

      const currentDraggingDiff = action.clientLoc - startDraggingAt;

      return {
        ...state,
        draggingState: {
          ...draggingState,
          draggingDiff: clip(
            currentDraggingDiff,
            draggingDiffMin,
            draggingDiffMax,
          ),
        },
      };
    }

    // Calculates new sizeProportions etc. based on last recorded draggingState
    case 'stopDragging': {
      const { draggingState } = state;
      if (!draggingState)
        throw new Error('Cannot fire stopDragging without starting to drag');

      const diffPercentage =
        (draggingState.draggingDiff / action.parentSize) * 100;
      const minProportion = (state.collapsedSize / action.parentSize) * 100;

      const { draggingIndex } = draggingState;
      const { sizePercentages } = state;

      const nbChildren = sizePercentages.length;

      const { collapsedFirstElement, collapsedLastElement } = state;
      let nextElementBaseSize: number;
      let draggingElementBaseSize: number;

      if (draggingIndex === 0 && collapsedFirstElement) {
        draggingElementBaseSize = minProportion;
        nextElementBaseSize = sizePercentages[draggingIndex + 1];
      } else if (draggingIndex === nbChildren - 2 && collapsedLastElement) {
        draggingElementBaseSize = sizePercentages[draggingIndex];
        nextElementBaseSize = minProportion;
      } else {
        draggingElementBaseSize = sizePercentages[draggingIndex];
        nextElementBaseSize = sizePercentages[draggingIndex + 1];
      }

      const newSizes = [...sizePercentages];

      const newDraggingElementSize =
        draggingElementBaseSize +
        sizePercentages[draggingIndex + 1] -
        nextElementBaseSize +
        diffPercentage;

      const newNextElementSize =
        nextElementBaseSize +
        sizePercentages[draggingIndex] -
        draggingElementBaseSize -
        diffPercentage;

      newSizes[draggingIndex] = newDraggingElementSize;
      newSizes[draggingIndex + 1] = newNextElementSize;

      return {
        ...state,
        collapsedFirstElement:
          draggingIndex === 0 && newDraggingElementSize <= minProportion,
        collapsedLastElement:
          draggingIndex === nbChildren - 2 &&
          newNextElementSize <= minProportion,
        draggingState: undefined,
        sizePercentages: newSizes,
      };
    }

    default:
      throw new Error(`Invalid Action ${action}`);
  }
};

export default reducer;
