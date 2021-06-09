/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable consistent-return */
import {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ItemProps } from './types';

type ButtonProps = {
  ref: React.RefObject<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type MenuResult = {
  buttonProps: ButtonProps;
  isOpen: boolean;
  itemsProps: ItemProps[];
};

// Custom type guard
function isKeyboardEvent(
  event: React.KeyboardEvent | React.MouseEvent,
): event is React.KeyboardEvent {
  return (event as React.KeyboardEvent).key !== undefined;
}

// Hook to manage accessibility logic of menu
// Needs to now number of menu items in advance
function useMenu(numberOfItems: number): MenuResult {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const currentFocusIndex = useRef<number | null>(null);

  // Track whether menu got opened via click but not a keyboard event
  const clickOpened = useRef(false);

  const itemsRefs = useMemo<Array<React.RefObject<HTMLAnchorElement>>>(() => {
    return [...Array(numberOfItems).keys()].map(() => createRef());
  }, [numberOfItems]);

  // Handle focus moving between items
  const moveFocus = useCallback(
    (itemIndex: number): void => {
      currentFocusIndex.current = itemIndex;
      itemsRefs[itemIndex].current?.focus();
    },
    [itemsRefs],
  );

  // If the menu is open focus on the first item
  // But only if it was opened by keyboard event
  useEffect(() => {
    if (isOpen && !clickOpened.current) {
      moveFocus(0);
    } else if (!isOpen) {
      clickOpened.current = false;
    }
  }, [moveFocus, isOpen]);

  // Disable scrolling with arrows when the menu is opened
  useEffect(() => {
    function disableArrowScroll(event: KeyboardEvent): void {
      if (isOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
      }
    }

    document.addEventListener('keydown', disableArrowScroll);

    return (): void =>
      document.removeEventListener('keydown', disableArrowScroll);
  }, [isOpen]);

  // Handle clicks and closing menu automatically
  useEffect(() => {
    // Ignore if the menu is closed
    if (!isOpen) {
      return;
    }

    function handleEveryClick(event: MouseEvent): void {
      setTimeout(() => {
        // Make sure we are targetting valid element
        if (!(event.target instanceof Element)) {
          return;
        }

        setIsOpen(false);
      }, 10);
    }

    document.addEventListener('click', handleEveryClick);

    return () => {
      document.removeEventListener('click', handleEveryClick);
    };
  }, [isOpen]);

  // Handle menu button clicks and keyboard events
  function buttonListener(event: React.KeyboardEvent | React.MouseEvent): void {
    // Detect if event was a keyboard event or a mouse event
    if (isKeyboardEvent(event)) {
      const { key } = event;

      if (!['Enter', ' ', 'Tab', 'ArrowDown'].includes(key)) {
        return;
      }

      if (
        (key === 'Tab' || key === 'ArrowDown') &&
        clickOpened.current &&
        isOpen
      ) {
        event.preventDefault();
        moveFocus(0);
      } else if (key !== 'Tab') {
        event.preventDefault();
        setIsOpen(true);
      }
    } else {
      clickOpened.current = !isOpen;
      setIsOpen(!isOpen);
    }
  }

  // Handle menu items clicks and keyboard events
  function itemListener(event: React.KeyboardEvent<HTMLAnchorElement>): void {
    const { key } = event;

    // Handle keyboard controls
    if (
      ['Tab', 'Shift', 'Enter', 'Escape', 'ArrowUp', 'ArrowDown', ' '].includes(
        key,
      )
    ) {
      // Create mutable value that initializes as the currentFocusIndex value
      let newFocusIndex = currentFocusIndex.current;

      // Controls whether the menu is open or closed
      // If the button should regain focus on close
      // If a handler function should be called
      if (key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (key === 'Tab') {
        setIsOpen(false);
        return;
      }
      if (key === 'Enter' || key === ' ') {
        event.currentTarget.click();

        setIsOpen(false);
        return;
      }

      // Controls the current index to focus
      if (newFocusIndex !== null) {
        if (key === 'ArrowUp') {
          newFocusIndex -= 1;
        } else if (key === 'ArrowDown') {
          newFocusIndex += 1;
        }

        if (newFocusIndex > itemsRefs.length - 1) {
          newFocusIndex = 0;
        } else if (newFocusIndex < 0) {
          newFocusIndex = itemsRefs.length - 1;
        }
      }

      // After any modification set state to the modified value
      if (newFocusIndex !== null) {
        moveFocus(newFocusIndex);
      }
    }
  }

  const buttonProps: ButtonProps = {
    'aria-expanded': isOpen,
    'aria-haspopup': true,
    onClick: buttonListener,
    onKeyDown: buttonListener,
    ref: buttonRef,
    role: 'button',
    tabIndex: 0,
  };

  const itemsProps = [...Array(numberOfItems).keys()].map((index) => {
    return {
      onKeyDown: itemListener,
      ref: itemsRefs[index],
      role: 'menuitem',
      tabIndex: -1,
    };
  });

  return { buttonProps, isOpen, itemsProps };
}

export default useMenu;
