import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import Button, { ButtonGroup } from '@datacamp/waffles-button';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { fireEvent, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';

import { setAppElement } from '..';
import Panel from '.';

describe('<Panel />', () => {
  const baseContainer = document.createElement('div');
  setAppElement(baseContainer);
  const getRenderOptions = (): RenderOptions => ({
    baseElement: document.body,
    container: document.body.appendChild(baseContainer),
  });

  describe('isOpen', () => {
    it('renders the modal via a portal when true', async () => {
      const { container, getByText, baseElement, getByRole } = await axeRender(
        <Panel onClose={() => {}} isOpen>
          children
        </Panel>,
        getRenderOptions(),
      );

      expect(container).toHaveAttribute('aria-hidden', 'true'); // app gets hidden when open

      const modalElement = getByRole('dialog');
      expect(modalElement).toContainElement(
        getByText('children') as HTMLElement,
      );
      expect(baseElement).toMatchSnapshot();
    });

    it('mounts nothing when false', async () => {
      const { container, baseElement, queryByRole } = await axeRender(
        <Panel isOpen={false} onClose={() => {}}>
          children
        </Panel>,
        getRenderOptions(),
      );

      expect(container).not.toHaveAttribute('aria-hidden', 'true'); // app is interactive when hidden
      expect(queryByRole('dialog')).not.toBeInTheDocument();
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('close button', () => {
    it('closes when clicking the visible X button by default', async () => {
      const onClose = jest.fn();

      const { getByTitle } = await axeRender(
        <Panel onClose={onClose} isOpen>
          children
        </Panel>,
        getRenderOptions(),
      );

      const closeButton = getByTitle('Cross') as HTMLElement;

      userEvent.click(closeButton);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('closeButton');
    });

    it('closes when clicking the visible X button when hideCloseButton=false', async () => {
      const onClose = jest.fn();

      const { getByTitle } = await axeRender(
        <Panel hideCloseButton={false} onClose={onClose} isOpen>
          children
        </Panel>,
        getRenderOptions(),
      );

      const closeButton = getByTitle('Cross') as HTMLElement;

      userEvent.click(closeButton);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('closeButton');
    });

    it("doesn't show the X button when hideCloseButton is true", async () => {
      const onClose = jest.fn();

      const { queryByTitle } = await axeRender(
        <Panel onClose={onClose} hideCloseButton isOpen>
          children
        </Panel>,
        getRenderOptions(),
      );

      expect(queryByTitle('Cross')).not.toBeInTheDocument();
    });
  });

  describe('background overlay', () => {
    it('closes when clicking the background overlay by default', async () => {
      const onClose = jest.fn();
      const { baseElement } = await axeRender(
        <Panel onClose={onClose} isOpen>
          children
        </Panel>,
        getRenderOptions(),
      );

      // need to use querySelector since there is no real content/label for the background
      const backgroundOverlayElement = baseElement.querySelector(
        '.modal-overlay',
      ) as HTMLElement;

      userEvent.click(backgroundOverlayElement);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('overlayClick');
    });

    it('closes when clicking the background overlay when shouldCloseOnOverlayClick=true', async () => {
      const onClose = jest.fn();
      const { baseElement } = await axeRender(
        <Panel onClose={onClose} isOpen shouldCloseOnOverlayClick>
          children
        </Panel>,
        getRenderOptions(),
      );

      // need to use querySelector since there is no real content/label for the background
      const backgroundOverlayElement = baseElement.querySelector(
        '.modal-overlay',
      ) as HTMLElement;

      userEvent.click(backgroundOverlayElement);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('overlayClick');
    });

    it("doesn't when clicking the background overlay when shouldCloseOnOverlayClick=false", async () => {
      const onClose = jest.fn();
      const { baseElement } = await axeRender(
        <Panel onClose={onClose} shouldCloseOnOverlayClick={false} isOpen>
          children
        </Panel>,
        getRenderOptions(),
      );

      // need to use querySelector since there is no real content/label for the background
      const backgroundOverlayElement = baseElement.querySelector(
        '.modal-overlay',
      ) as HTMLElement;

      userEvent.click(backgroundOverlayElement);
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('escape key', () => {
    it('closes when clicking escape by default', async () => {
      const onClose = jest.fn();
      const { getByRole } = await axeRender(
        <Panel onClose={onClose} isOpen>
          children
        </Panel>,
        getRenderOptions(),
      );

      const dialogElement = getByRole('dialog') as HTMLElement;

      fireEvent.keyDown(dialogElement, {
        key: 'ESC',
        keyCode: 27,
      });

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('escKey');
    });

    it('closes when clicking escape if shouldCloseOnEsc=true', async () => {
      const onClose = jest.fn();
      const { getByRole } = await axeRender(
        <Panel onClose={onClose} isOpen shouldCloseOnEsc>
          children
        </Panel>,
        getRenderOptions(),
      );

      const dialogElement = getByRole('dialog') as HTMLElement;

      fireEvent.keyDown(dialogElement, {
        key: 'ESC',
        keyCode: 27,
      });

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledWith('escKey');
    });

    it("doesn't close when clicking escape if shouldCloseOnEsc=false", async () => {
      const onClose = jest.fn();
      const { getByRole } = await axeRender(
        <Panel onClose={onClose} shouldCloseOnEsc={false} isOpen>
          children
        </Panel>,
        getRenderOptions(),
      );

      const dialogElement = getByRole('dialog') as HTMLElement;

      fireEvent.keyDown(dialogElement, {
        key: 'ESC',
        keyCode: 27,
      });

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  it('sets the width', async () => {
    const onClose = jest.fn();
    const width = '200px';
    const { getByRole } = await axeRender(
      <Panel onClose={onClose} width={width} isOpen>
        children
      </Panel>,
      getRenderOptions(),
    );

    const dialogElement = getByRole('dialog') as HTMLElement;
    expect(dialogElement).toHaveStyle(`width: ${width};`);
  });

  it('renders with a Header', async () => {
    const testTitle = 'test title';

    const { getByText } = await axeRender(
      <Panel onClose={() => {}} isOpen>
        <Panel.Header>{testTitle}</Panel.Header>
        children
      </Panel>,
      getRenderOptions(),
    );

    expect(getByText(testTitle)).toBeInTheDocument();

    // expect(baseElement).toMatchSnapshot();
  });

  it('renders with a Header, Body & Footer', async () => {
    const testTitle = 'test title';

    const { getByText } = await axeRender(
      <Panel onClose={() => {}} isOpen>
        <Panel.Header>{testTitle}</Panel.Header>
        <Panel.Body>children</Panel.Body>
        <Panel.Footer>
          <Button onClick={() => {}}>Button</Button>
        </Panel.Footer>
      </Panel>,
      getRenderOptions(),
    );

    expect(getByText(testTitle)).toBeInTheDocument();
    expect(getByText('children')).toBeInTheDocument();
    expect(getByText('Button')).toBeInTheDocument();

    // expect(baseElement).toMatchSnapshot();
  });

  it('renders two buttons in the Footer with space in between', async () => {
    const { container } = await axeRender(
      <Panel.Footer>
        <Button onClick={() => {}}>Button1</Button>
        <Button onClick={() => {}}>Button2</Button>
      </Panel.Footer>,
      getRenderOptions(),
    );

    expect(container.firstChild).toHaveStyle(`justify-content: space-between`);
    expect(container.firstChild).toHaveStyle(
      `paddingLeft: ${tokens.size.space[16].value}`,
    );
    expect(container.firstChild).toHaveStyle(
      `paddingRight: ${tokens.size.space[16].value}`,
    );

    // expect(baseElement).toMatchSnapshot();
  });

  it('renders a ButtonGroup in the Footer', async () => {
    const { getByText } = await axeRender(
      <Panel.Footer>
        <ButtonGroup>
          <Button onClick={() => {}}>Button1</Button>
          <Button onClick={() => {}}>Button2</Button>
        </ButtonGroup>
      </Panel.Footer>,
      getRenderOptions(),
    );

    expect(getByText('Button1')).toBeInTheDocument();
    expect(getByText('Button2')).toBeInTheDocument();
    expect(getByText('Button2')).toHaveStyle(
      `marginLeft: ${tokens.size.space[16].value}`,
    );

    // expect(baseElement).toMatchSnapshot();
  });
});
