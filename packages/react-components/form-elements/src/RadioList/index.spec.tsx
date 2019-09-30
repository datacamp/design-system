import '@testing-library/jest-dom/extend-expect';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import RadioList from './index';
import Radio from './Radio';

describe('<RadioList>', () => {
  const testName = 'test-name';
  const testValue = 'test value';

  it('sets the correct name on the radio group', () => {
    const { getByLabelText } = render(
      <RadioList name={testName} onChange={() => {}} value={testValue}>
        <Radio value={testValue} />
        <Radio value="value2" />
      </RadioList>
    );

    const radioList = getByLabelText(testValue) as HTMLElement;
    expect(radioList).toHaveAttribute('name', testName);
  });

  it('renders the indication "required" above the radio group if required is passed as a prop', () => {
    const { getByText } = render(
      <RadioList name={testName} onChange={() => {}} value={testValue} required>
        <Radio value={testValue} />
        <Radio value="value2" />
      </RadioList>
    );

    expect(getByText('required')).toBeInTheDocument();
    expect(getByText('required')).toHaveStyle(
      `color: ${tokens.color.opaque.greyOslo.value.hex}`
    );
    expect(getByText('required')).toHaveStyle(`font-size: '14px`);
  });

  it('adds an error message under the input field if error is passed as a prop', () => {
    const testError = 'Test error';

    const { getByText } = render(
      <RadioList
        errorMessage={testError}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <Radio value={testValue} />
        <Radio value="value2" />
      </RadioList>
    );
    expect(getByText(testError)).toBeInTheDocument();
    expect(getByText(testError)).toHaveStyle(
      `color: ${tokens.color.opaque.red.value.hex}`
    );
    expect(getByText(testError)).toHaveStyle(`font-size: '14px`);
  });
});

describe('<Radio>', () => {
  const testName = 'test-name';
  const testValue = 'test value';

  it('sets the correct label on the radio options', () => {
    const { getByLabelText } = render(
      <RadioList name={testName} onChange={() => {}} value={testValue}>
        <Radio value={testValue} />
        <Radio value="value2" />
      </RadioList>
    );

    const radioElement = getByLabelText(testValue) as HTMLElement;
    expect(radioElement).toBeInTheDocument();
  });

  it('sets the data attributes', () => {
    const testDataAttributes = { test: 'example' };

    const { getByLabelText } = render(
      <RadioList
        dataAttributes={testDataAttributes}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <Radio value={testValue} />
        <Radio value="value2" />
      </RadioList>
    );

    const radioElement = getByLabelText(testValue) as HTMLElement;

    expect(radioElement).toHaveAttribute('data-test', 'example');
  });

  it('calls the onChange function', () => {
    const { getByLabelText } = render(
      <RadioList name={testName} onChange={() => {}} value={testValue}>
        <Radio value={testValue} />
        <Radio value="value2" />
      </RadioList>
    );

    const radioElement = getByLabelText(testValue);
    fireEvent.change(radioElement, { target: { value: 'value2' } });
    expect(radioElement).toHaveAttribute('value', 'value2');
  });

  it('hides the default radio button', () => {
    const { getByLabelText } = render(
      <RadioList name={testName} onChange={() => {}} value={testValue}>
        <Radio value={testValue} />
        <Radio value="value2" />
      </RadioList>
    );

    const radioElement = getByLabelText(testValue) as HTMLElement;

    expect(radioElement).toHaveStyle(`
        opacity: 0,
        position: 'absolute',
        width: 0,
      `);
  });

  it('renders a custom radio button', () => {
    const { getByLabelText } = render(
      <RadioList name={testName} onChange={() => {}} value={testValue}>
        <Radio value={testValue} />
        <Radio value="value2" />
      </RadioList>
    );

    const radioElement = getByLabelText(testValue) as HTMLElement;

    expect(radioElement).toHaveStyle(`
    boxShadow: inset 0 0 0 1px ${tokens.color.opaque.primary.value.hex}
      `);
    expect(radioElement).toHaveStyle(`
      borderRadius: '50%',
        `);
  });

  it('disables the radio button', () => {
    const { getByLabelText } = render(
      <RadioList name={testName} onChange={() => {}} value={testValue}>
        <Radio value={testValue} disabled />
        <Radio value="value2" />
      </RadioList>
    );

    const radioElement = getByLabelText(testValue) as HTMLElement;

    expect(radioElement).toHaveStyle(`
    boxShadow: inset 0 0 0 1px ${tokens.color.opaque.greyLight.value.hex}
      `);
    expect(radioElement).toHaveAttribute('disabled');
  });
});

describe('snapshots', () => {
  const testName = 'test-name';
  const testValue = 'test value';
  const required: (boolean | undefined)[] = [undefined, true, false];

  required.forEach(isRequired => {
    it(`renders a radio button group`, async () => {
      const { container } = await render(
        <RadioList
          errorMessage="test error"
          name={testName}
          onChange={() => {}}
          required={isRequired}
          value={testValue}
        >
          <Radio value={testValue} />
          <Radio value="value2" />
          <Radio value="value2" disabled />
        </RadioList>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
