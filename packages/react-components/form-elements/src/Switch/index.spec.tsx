import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render } from '@testing-library/react';

import Switch from './index';

describe('<Switch>', () => {
  it('has label and sets the correct aria attributes when not checked', () => {
    const { getByRole, getByText } = render(
      <Switch checked={false} onChange={() => {}}>
        Airport mode
      </Switch>,
    );

    const input = getByRole('switch');
    const label = getByText('Airport mode');

    expect(input).toHaveAttribute('aria-checked', 'false');
    expect(label).toBeInTheDocument();
  });

  it('has label and sets the correct aria attributes when checked', () => {
    const { getByRole, getByText } = render(
      <Switch checked={true} onChange={() => {}}>
        Wi-fi
      </Switch>,
    );

    const input = getByRole('switch');
    const label = getByText('Wi-fi');

    expect(input).toHaveAttribute('aria-checked', 'true');
    expect(label).toBeInTheDocument();
  });

  it('when label is not provided aria-label is set', () => {
    const { getByRole } = render(
      <Switch aria-label="Bluetooth" checked={true} onChange={() => {}} />,
    );

    const input = getByRole('switch');

    expect(input).toHaveAttribute('aria-label', 'Bluetooth');
  });

  it('calls onChange when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Switch checked={true} onChange={handleClick}>
        Bluetooth
      </Switch>,
    );

    const label = getByText('Bluetooth');
    fireEvent.click(label);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables input when "disabled" is passed', () => {
    const { getByRole } = render(
      <Switch checked={true} disabled onChange={() => {}}>
        Bluetooth
      </Switch>,
    );

    const input = getByRole('switch');

    expect(input).toBeDisabled();
  });
});

describe('snapshots', () => {
  const appearances: Array<'default' | 'inverted'> = ['default', 'inverted'];
  const disabled = [true, false];
  const checked = [true, false];

  appearances.forEach((appearance) => {
    disabled.forEach((isDiabled) => {
      checked.forEach((isChecked) => {
        it(`renders a switch with appearance ${appearance}, disabled=${isDiabled}, checked=${isChecked}`, async () => {
          const { container } = await render(
            <Switch appearance={appearance} disabled={isDiabled}>
              Test
            </Switch>,
          );
          expect(container.firstChild).toMatchSnapshot();
        });
      });
    });
  });

  it('renders an empty switch', () => {
    const { container } = render(
      <Switch aria-label="Test" checked={true} onChange={() => {}} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
