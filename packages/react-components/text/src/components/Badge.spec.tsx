import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import tokens from '@datacamp/waffles-tokens';

import Badge from './Badge';

describe('Badge', () => {
  const testContent = 'test content';
  it('renders with the provided colour, className and content', async () => {
    const { getByText } = await axeRender(
      <Badge className="test-class" color={tokens.colors.navy}>
        {testContent}
      </Badge>,
    );
    const element = getByText(testContent) as HTMLElement;
    expect(element).toHaveStyle(`background-color: ${tokens.colors.navy}`);
    expect(element).toHaveClass('test-class');
    expect(element).toMatchSnapshot();
  });

  describe('size', () => {
    it('renders a small badge', async () => {
      const { getByText } = await axeRender(
        <Badge color={tokens.colors.navy} size="small">
          {testContent}
        </Badge>,
      );
      const element = getByText(testContent) as HTMLElement;
      expect(element).toHaveStyle(`font-size: ${tokens.fontSizes.medium}`);
      expect(element).toHaveStyle(`line-height: 18px`);
      expect(element).toHaveStyle(`padding-left: ${tokens.spacing.xsmall}`);
      expect(element).toHaveStyle(`padding-right: ${tokens.spacing.xsmall}`);
    });

    it('renders a large badge', async () => {
      const { getByText } = await axeRender(
        <Badge color={tokens.colors.navy} size="large">
          {testContent}
        </Badge>,
      );
      const element = getByText(testContent) as HTMLElement;
      expect(element).toHaveStyle(`font-size: ${tokens.fontSizes.large}`);
      expect(element).toHaveStyle(`line-height: 24px`);
      expect(element).toHaveStyle(`padding-left: ${tokens.spacing.small}`);
      expect(element).toHaveStyle(`padding-right: ${tokens.spacing.small}`);
    });
  });

  describe('textColor', () => {
    it('sets the text color to white on a navy background', async () => {
      const { getByText } = await axeRender(
        <Badge color={tokens.colors.navy}>{testContent}</Badge>,
      );
      const element = getByText(testContent) as HTMLElement;
      expect(element).toHaveStyle(`color: ${tokens.colors.white}`);
    });

    it('sets the text color to navyText on a neutral background', async () => {
      const { getByText } = await axeRender(
        <Badge color={tokens.colors.beigeSubtle}>{testContent}</Badge>,
      );
      const element = getByText(testContent) as HTMLElement;
      expect(element).toHaveStyle(`color: ${tokens.colors.navy}`);
    });
  });
});
