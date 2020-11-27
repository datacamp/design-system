import reducer from './reducer';

describe('reducer', () => {
  const initialStateWithoutDragging = {
    collapsedFirstElement: false,
    collapsedLastElement: false,
    draggingState: null,
    minSize: 50,
    sizePercentages: [25, 25, 25, 25],
  };

  const initialStateWithDragging = {
    ...initialStateWithoutDragging,
    draggingState: {
      draggingDiff: 10,
      draggingIndex: 2,
      draggingMax: 100,
      draggingMin: 5,
      startDraggingAt: 300,
    },
  };

  it('handles a toggleFirstElement action', () => {
    const newState = reducer(initialStateWithoutDragging, {
      type: 'toggleFirstElement',
    });

    expect(newState.collapsedFirstElement).toEqual(true);
  });

  it('handles a toggleLastElement action', () => {
    const newState = reducer(initialStateWithoutDragging, {
      type: 'toggleLastElement',
    });

    expect(newState.collapsedLastElement).toEqual(true);
  });

  describe('startDragging action', () => {
    it('throws an error if already dragging', () => {
      expect(() =>
        reducer(initialStateWithDragging, {
          index: 1,
          parentOffset: 10,
          parentSize: 500,
          startPosition: 100,
          type: 'startDragging',
        }),
      ).toThrowError('Already dragging');
    });

    it('sets the draggingState', () => {
      expect(
        reducer(initialStateWithoutDragging, {
          index: 1,
          parentOffset: 10,
          parentSize: 500,
          startPosition: 100,
          type: 'startDragging',
        }),
      ).toEqual({
        ...initialStateWithoutDragging,
        draggingState: {
          draggingDiff: 0,
          draggingIndex: 1,
          draggingMax: 75,
          draggingMin: -75,
          startDraggingAt: 100,
        },
      });
    });
  });

  describe('dragUpdate action', () => {
    it('thows an error if not yet dragging', () => {
      expect(() =>
        reducer(initialStateWithoutDragging, {
          clientLoc: 20,
          type: 'dragUpdate',
        }),
      ).toThrowError('Cannot fire dragUpdate without starting to drag');
    });

    it('updates the draggingState', () => {
      expect(
        reducer(initialStateWithDragging, {
          clientLoc: 10,
          type: 'dragUpdate',
        }),
      ).toEqual({
        ...initialStateWithDragging,
        draggingState: {
          ...initialStateWithDragging.draggingState,
          draggingDiff: 5,
        },
      });
    });
  });

  describe('stopDragging action', () => {
    it('throws an error if not yet dragging', () => {
      expect(() =>
        reducer(initialStateWithoutDragging, {
          parentSize: 1000,
          type: 'stopDragging',
        }),
      ).toThrowError('Cannot fire stopDragging without starting to drag');
    });

    it('sets the new sizes and resets the draggingState', () => {
      expect(
        reducer(initialStateWithDragging, {
          parentSize: 1000,
          type: 'stopDragging',
        }),
      ).toEqual({
        collapsedFirstElement: false,
        collapsedLastElement: false,
        draggingState: null,
        minSize: 50,
        sizePercentages: [25, 25, 26, 24],
      });
    });
  });
});
