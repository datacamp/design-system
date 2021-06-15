import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import { shadow } from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { fireEvent } from '@testing-library/react';

import Card, { elevationMap } from '.';

const testText = 'example content';

describe('<Card />', () => {
  describe('element type', () => {
    it('is specified using as prop', async () => {
      const { container } = await axeRender(
        <Card as="section">
          <p>{testText}</p>
        </Card>,
      );

      expect((container.firstChild as HTMLElement).tagName).toEqual('SECTION');
    });

    it('is a div by default', async () => {
      const { container } = await axeRender(
        <Card>
          <p>{testText}</p>
        </Card>,
      );

      expect((container.firstChild as HTMLElement).tagName).toEqual('DIV');
    });
  });

  describe('children', () => {
    it('is rendered inside the card', async () => {
      const { container, getByText } = await axeRender(
        <Card as="section">
          <p>{testText}</p>
        </Card>,
      );
      const childElement = getByText(testText) as HTMLElement;

      expect(container.firstChild).toContainElement(childElement);
    });
  });

  describe('className', () => {
    it('is set on the card element', async () => {
      const testClass = 'test-className';
      const { container } = await axeRender(
        <Card className={testClass}>
          <p>{testText}</p>
        </Card>,
      );

      expect(container.firstChild).toHaveClass(testClass);
    });
  });

  describe('event handler', () => {
    it('onClick is called when a card is clicked', async () => {
      const handleOnClick = jest.fn();
      const { container } = await axeRender(
        <Card onClick={handleOnClick}>
          <p>{testText}</p>
        </Card>,
      );

      fireEvent.click(container.firstChild);

      expect(handleOnClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('elevation', () => {
    it('has the border box shadow by default', async () => {
      const { container } = await axeRender(
        <Card>
          <p>{testText}</p>
        </Card>,
      );

      expect(container.firstChild).toHaveStyle(
        `box-shadow: 0 0 2px 0 rgba(5, 25, 45, 0.25);`,
      );
    });

    it('has the border box shadow for elevation = 0', async () => {
      const { container } = await axeRender(
        <Card elevation={0}>
          <p>{testText}</p>
        </Card>,
      );

      expect(container.firstChild).toHaveStyle(
        `box-shadow: 0 0 2px 0 rgba(5, 25, 45, 0.25);`,
      );
    });

    it('has the small box shadow for elevation = 1', async () => {
      const { container } = await axeRender(
        <Card elevation={1}>
          <p>{testText}</p>
        </Card>,
      );

      expect(container.firstChild).toHaveStyle(
        `box-shadow: 0 0 2px 0 rgba(5, 25, 45, 0.25),${shadow.sm.value};`,
      );
    });

    it('has the medium box shadow for elevation = 2', async () => {
      const { container } = await axeRender(
        <Card elevation={2}>
          <p>{testText}</p>
        </Card>,
      );

      expect(container.firstChild).toHaveStyle(
        `box-shadow: 0 0 2px 0 rgba(5, 25, 45, 0.25),${shadow.md.value};`,
      );
    });

    it('has the large box shadow for elevation = 3', async () => {
      const { container } = await axeRender(
        <Card elevation={3}>
          <p>{testText}</p>
        </Card>,
      );

      expect(container.firstChild).toHaveStyle(
        `box-shadow: 0 0 2px 0 rgba(5, 25, 45, 0.25),${shadow.lg.value};`,
      );
    });

    it('has the extra large box shadow for elevation = 4', async () => {
      const { container } = await axeRender(
        <Card elevation={4}>
          <p>{testText}</p>
        </Card>,
      );

      expect(container.firstChild).toHaveStyle(
        `box-shadow: 0 0 2px 0 rgba(5, 25, 45, 0.25),${shadow.xl.value};`,
      );
    });
  });

  describe('headstones', () => {
    it('renders the content of the headstone in a box above the card', async () => {
      const someHeadstoneContent = 'this is in the headstone';
      const { container, getByText } = await axeRender(
        <Card headStone={someHeadstoneContent}>
          <p>example content</p>
        </Card>,
      );
      expect(getByText(someHeadstoneContent)).toBeInTheDocument();
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('snapshots', () => {
    Object.keys(elevationMap)
      .map((key) => parseInt(key, 10))
      .forEach((elevation: any) => {
        it(`renders a card with elevation ${elevation}`, async () => {
          const { container } = await axeRender(
            <Card elevation={elevation}>
              <p>example content</p>
            </Card>,
          );

          expect(container.firstChild).toMatchSnapshot();
        });

        if (elevation === 0) return; // no hover snapshot for level 0

        it(`renders a card with hoverElevation ${elevation}`, async () => {
          const { container } = await axeRender(
            <Card hoverElevation={elevation}>
              <p>example content</p>
            </Card>,
          );

          expect(container.firstChild).toMatchSnapshot();
        });
      });
  });
});
