import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import ResizableElements from './ResizableElements';

describe('ResizableElements', () => {
  it('renders the correct sized elements', () => {
    const { container } = render(
      <ResizableElements orientation="row">
        <div>firstChild</div>
        <div>secondChild</div>
        <div>thirdChild</div>
      </ResizableElements>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  describe('eventHandlers', () => {
    let useReducerSpy: jest.SpyInstance;

    beforeEach(() => {
      useReducerSpy = jest.spyOn(React, 'useReducer');
    });

    it('dispatches a startDragging action', () => {
      const dispatch = jest.fn();
      useReducerSpy.mockReturnValue([
        {
          collapsedFirstElement: false,
          collapsedLastElement: false,
          draggingState: null,
          sizePercentages: [33, 33, 33],
        },
        dispatch,
      ]);

      const { getAllByRole } = render(
        <ResizableElements orientation="row">
          <div>firstChild</div>
          <div>secondChild</div>
          <div>thirdChild</div>
        </ResizableElements>,
      );

      const separators = getAllByRole('separator');

      fireEvent.mouseDown(separators[0]);

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'startDragging' }),
      );
    });

    it('dispatches a dragUpdate action', () => {
      const dispatch = jest.fn();
      useReducerSpy.mockReturnValue([
        {
          collapsedFirstElement: false,
          collapsedLastElement: false,
          draggingState: {},
          sizePercentages: [33, 33, 33],
        },
        dispatch,
      ]);

      const { getAllByRole } = render(
        <ResizableElements orientation="row">
          <div>firstChild</div>
          <div>secondChild</div>
          <div>thirdChild</div>
        </ResizableElements>,
      );

      const separators = getAllByRole('separator');

      fireEvent.mouseMove(separators[0]);

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'dragUpdate' }),
      );
    });

    it('dispatches a stopDraggin action', () => {
      const dispatch = jest.fn();
      useReducerSpy.mockReturnValue([
        {
          collapsedFirstElement: false,
          collapsedLastElement: false,
          draggingState: {},
          sizePercentages: [33, 33, 33],
        },
        dispatch,
      ]);

      const { getAllByRole } = render(
        <ResizableElements orientation="row">
          <div>firstChild</div>
          <div>secondChild</div>
          <div>thirdChild</div>
        </ResizableElements>,
      );

      const separators = getAllByRole('separator');

      fireEvent.mouseUp(separators[0]);

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'stopDragging' }),
      );
    });
  });
});
