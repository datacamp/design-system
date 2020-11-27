interface State {
  collapsedFirstElement: boolean;
  collapsedLastElement: boolean;
  draggingState: {
    draggingDiff: number;
    draggingIndex: number;
    draggingMax: number;
    draggingMin: number;
    startDraggingAt: number;
  } | null;
  minSize: number;
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

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'toggleFirstElement':
      return { ...state, collapsedFirstElement: !state.collapsedFirstElement };

    case 'toggleLastElement':
      return { ...state, collapsedLastElement: !state.collapsedLastElement };

    case 'startDragging': {
      const { draggingState, minSize, sizePercentages } = state;
      const { index, parentOffset, parentSize, startPosition } = action;

      if (draggingState) throw new Error('Already dragging');

      let draggingMin = (-sizePercentages[index] / 100) * parentSize;
      let draggingMax = sizePercentages[index + 1]
        ? (sizePercentages[index + 1] / 100) * parentSize
        : startPosition - (parentOffset + parentSize);

      draggingMin += minSize;
      draggingMax -= minSize;

      return {
        ...state,
        draggingState: {
          draggingDiff: 0,
          draggingIndex: index,
          draggingMax,
          draggingMin,
          startDraggingAt: startPosition,
        },
      };
    }

    case 'dragUpdate': {
      const { draggingState } = state;
      if (!draggingState)
        throw new Error('Cannot fire dragUpdate without starting to drag');

      const { draggingMax, draggingMin, startDraggingAt } = draggingState;

      return {
        ...state,
        draggingState: {
          ...draggingState,
          draggingDiff: clip(
            action.clientLoc - startDraggingAt,
            draggingMin,
            draggingMax,
          ),
        },
      };
    }

    case 'stopDragging': {
      const { draggingState } = state;
      if (!draggingState)
        throw new Error('Cannot fire stopDragging without starting to drag');

      const diff = (draggingState.draggingDiff / action.parentSize) * 100;
      const minProportion = (state.minSize / action.parentSize) * 100;

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
        diff;

      const newNextElementSize =
        nextElementBaseSize +
        sizePercentages[draggingIndex] -
        draggingElementBaseSize -
        diff;

      newSizes[draggingIndex] = newDraggingElementSize;
      newSizes[draggingIndex + 1] = newNextElementSize;

      return {
        ...state,
        collapsedFirstElement:
          draggingIndex === 0 && newDraggingElementSize <= minProportion,
        collapsedLastElement:
          draggingIndex === nbChildren - 2 &&
          newNextElementSize <= minProportion,
        draggingState: null,
        sizePercentages: newSizes,
      };
    }

    default:
      throw new Error(`Invalid Action ${action}`);
  }
};

export default reducer;
