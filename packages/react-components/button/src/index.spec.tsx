import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Button from '.';

describe('<Button />', () => {
  it('renders a button element containing the text', async () => {
    const exampleText = 'this is a button';
    const { container, getByText } = await axeRender(
      <Button>{exampleText}</Button>
    );
    const buttonElement = container.firstChild as HTMLElement;
    expect(buttonElement.tagName).toEqual('BUTTON');
    expect(buttonElement).toContainElement(getByText(
      exampleText
    ) as HTMLElement);
  });

  it('sets the dataAttributes on the button element', async () => {
    const data = { test: 'example' };
    const { container } = await axeRender(
      <Button dataAttributes={data}>button text</Button>
    );

    expect(container.firstChild).toHaveAttribute('data-test', 'example');
  });

  it('sets className on the button element', async () => {
    const testClass = 'test-className';
    const { container } = await axeRender(
      <Button className={testClass}>button text</Button>
    );

    expect(container.firstChild).toHaveClass(testClass);
  });

  it('sets the aria-label on the button element', async () => {
    const exempleAriaLabel = 'add button';
    const { container } = await axeRender(
      <Button ariaLabel={exempleAriaLabel}>button text</Button>
    );

    expect(container.firstChild).toHaveAttribute('aria-label', 'add button');
  });

  it('calls the function on click', async () => {
    const someFunction = jest.fn();
    const { getByText } = await axeRender(
      <Button onClick={someFunction}>click me</Button>
    );
    userEvent.click(getByText('click me') as HTMLElement);

    expect(someFunction).toHaveBeenCalledTimes(1);
  });

  it('renders the disabled property', async () => {
    const { container } = await axeRender(
      <Button disabled>disabled button</Button>
    );

    const buttonElement = container.firstChild;

    expect(buttonElement).toHaveAttribute('disabled');
  });

  describe('button size', () => {
    it('renders the small button for the size="small" ', async () => {
      const { queryByText, container } = await axeRender(
        <Button size="small">btn small</Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`padding: 0 16px;`);
      expect(queryByText('btn small')).toHaveStyle(` line-height: 36px`);
    });

    it('renders the medium button for the size="medium" ', async () => {
      const { queryByText, container } = await axeRender(
        <Button size="medium">btn medium</Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`padding: 0 16px;`);
      expect(queryByText('btn medium')).toHaveStyle(` line-height: 48px`);
    });

    it('renders the large button for the size="large" ', async () => {
      const { queryByText, container } = await axeRender(
        <Button size="large">large btn</Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`padding: 0 32px;`);
      expect(queryByText('large btn')).toHaveStyle(`font-size: 20px`);
      expect(queryByText('large btn')).toHaveStyle(` line-height: 64px`);
    });

    it('renders the medium size if no size props is specified', async () => {
      const { queryByText, container } = await axeRender(
        <Button>default size btn</Button>
      );

      const buttonElement = container.firstChild;
      expect(buttonElement).toHaveStyle(`padding: 0 16px;`);
      expect(queryByText('default size btn')).toHaveStyle(` line-height: 48px`);
    });
  });

  describe('primary button color', () => {
    it('renders a blue button for the appearance="primary" and intent="neutral', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="neutral">
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: tokens.color.opaque.primary.value.rgb`
      );
    });

    it('renders a red button for the appearance="primary" and intent="danger', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="danger">
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(`background-color:  #FE5C5C`);
    });

    it('renders an orange button for the appearance="primary" and intent="warning', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="warning">
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color: tokens.color.opaque.orange.value.rgb`
      );
    });

    it('renders a green button for the appearance="primary" and intent="success', async () => {
      const { container } = await axeRender(
        <Button appearance="primary" intent="success">
          btn
        </Button>
      );

      expect(container.firstChild).toHaveStyle(
        `background-color:  tokens.color.opaque.green.value.rgb`
      );
    });
  });

  describe(' default button color', () => {
    it('renders a blue outline button for the intent="neutral', async () => {
      const { container } = await axeRender(
        <Button appearance="default" intent="neutral">
          btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`box-shadow: inset 0 0 0 1px #33AACC`);
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders a red outline button for the intent="danger', async () => {
      const { container } = await axeRender(
        <Button appearance="default" intent="danger">
          btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`box-shadow: inset 0 0 0 1px #FE5C5C`);
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders an orange outline button for the intent="warning', async () => {
      const { container } = await axeRender(
        <Button appearance="default" intent="warning">
          btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`box-shadow: inset 0 0 0 1px #FF9400`);
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });

    it('renders a green outline button for the intent="success', async () => {
      const { container } = await axeRender(
        <Button appearance="default" intent="success">
          btn
        </Button>
      );

      const buttonElement = container.firstChild;

      expect(buttonElement).toHaveStyle(`box-shadow: inset 0 0 0 1px #36D57D`);
      expect(buttonElement).toHaveStyle(`background-color: white`);
    });
  });

  describe('isLoading', () => {
    it('renders a spinner when the prop "isLoading" is passed to the button', async () => {
      const { container, getByText, getByTitle } = await render(
        <Button isLoading>btn loading</Button>
      );

      const buttonElement = container.firstChild;
      const spinnerElement = getByTitle('Spinner') as HTMLElement;
      expect(buttonElement).toContainElement(spinnerElement);
      expect(getByText('btn loading') as HTMLElement).toHaveStyle(
        `color: transparent`
      );
    });

    it('renders a dark spinner when the appearance="default" (or undefined)', async () => {
      const { container } = await render(<Button isLoading>Loading</Button>);

      const spinnerElement = container.querySelector('g');

      expect(spinnerElement).toHaveAttribute('fill', '#3D4251');
    });

    it('renders a white spinner when the appearance="primary"', async () => {
      const { container } = await render(
        <Button appearance="primary" isLoading>
          Loading
        </Button>
      );

      const spinnerElement = container.querySelector('g');

      expect(spinnerElement).toHaveAttribute('fill', '#ffffff');
    });
  });

  describe('snapshots', () => {
    const exampleText = 'this is a button';

    const buttonSizes: ('small' | 'medium' | 'large')[] = [
      'small',
      'medium',
      'large',
    ];
    const buttonIntents: ('neutral' | 'warning' | 'danger' | 'success')[] = [
      'neutral',
      'warning',
      'danger',
      'success',
    ];
    const buttonAppearance: ('primary' | 'default')[] = ['primary', 'default'];
    const isLoadings: boolean[] = [true, false];
    buttonSizes.forEach(size => {
      buttonIntents.forEach(intent => {
        buttonAppearance.forEach(appearance => {
          isLoadings.forEach(isLoading => {
            it(`renders a button with appearance ${appearance}, intent ${intent}, size ${size} and isLoading ${isLoading}`, async () => {
              const { container } = await axeRender(
                <Button
                  appearance={appearance}
                  intent={intent}
                  isLoading={isLoading}
                  size={size}
                >
                  {exampleText}
                </Button>
              );
              expect(container.firstChild).toMatchSnapshot();
            });
          });
        });
      });
    });
  });
});
