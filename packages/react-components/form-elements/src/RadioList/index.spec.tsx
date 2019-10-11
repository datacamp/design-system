import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import RadioList from './index';
import Radio from './Radio';

const testName = 'test-name';
const testValue = 'test value';
const testLabel = 'test label';

describe('<RadioList>', () => {
  it('renders the list', () => {
    const { getByLabelText, getByText } = render(
      <RadioList
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <Radio value={testValue}>item 1</Radio>
        <Radio value="value2">item 2</Radio>
      </RadioList>
    );

    expect(getByText(testLabel) as HTMLElement).toBeInTheDocument();

    const item1 = getByLabelText('item 1') as HTMLElement;
    const item2 = getByLabelText('item 2') as HTMLElement;

    // all elements have the name
    expect(item1).toHaveAttribute('name', testName);
    expect(item2).toHaveAttribute('name', testName);
  });

  describe('required', () => {
    it('renders the indication "required" above the radio group if required is passed as a prop', () => {
      const { getByText } = render(
        <RadioList
          label={testLabel}
          name={testName}
          onChange={() => {}}
          value={testValue}
          required
        >
          <Radio value={testValue}>item 1</Radio>
          <Radio value="value2">item 2</Radio>
        </RadioList>
      );

      expect(getByText('required')).toBeInTheDocument();
    });
    it('renders the indication "optional" above the radio group if required=false is passed as a prop', () => {
      const { getByText } = render(
        <RadioList
          label={testLabel}
          name={testName}
          onChange={() => {}}
          required={false}
          value={testValue}
        >
          <Radio value={testValue}>item 1</Radio>
          <Radio value="value2">item 2</Radio>
        </RadioList>
      );

      expect(getByText('optional')).toBeInTheDocument();
    });
  });

  it('adds an error message under the radio group if error is passed as a prop', () => {
    const testError = 'Test error';

    const { getByText } = render(
      <RadioList
        errorMessage={testError}
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <Radio value={testValue}>item 1</Radio>
        <Radio value="value2">item 2</Radio>
      </RadioList>
    );
    expect(getByText(testError)).toBeInTheDocument();
  });

  it('disables the whole component', () => {
    const { getByLabelText } = render(
      <RadioList
        label="test-label"
        name={testName}
        onChange={() => {}}
        value="value1"
        disabled
      >
        <Radio value="value1">item 1</Radio>
        <Radio value="value2">item 2</Radio>
      </RadioList>
    );

    const radioElement1 = getByLabelText('item 1') as HTMLElement;
    const radioElement2 = getByLabelText('item 2') as HTMLElement;

    expect(radioElement1).toHaveAttribute('disabled');
    expect(radioElement2).toHaveAttribute('disabled');
  });

  it('disables an individual option', () => {
    const { getByLabelText } = render(
      <RadioList
        label="test-label"
        name={testName}
        onChange={() => {}}
        value="value1"
      >
        <Radio value="value1">item 1</Radio>
        <Radio value="value2" disabled>
          item 2
        </Radio>
      </RadioList>
    );

    const radioElement1 = getByLabelText('item 1') as HTMLElement;
    const radioElement2 = getByLabelText('item 2') as HTMLElement;

    expect(radioElement1).not.toHaveAttribute('disabled');
    expect(radioElement2).toHaveAttribute('disabled');
  });

  describe('interactivity', () => {
    it('has no selected option when value is invalid', () => {
      const { getByLabelText } = render(
        <RadioList
          label="test-label"
          name={testName}
          onChange={() => {}}
          value=""
        >
          <Radio value="value1">item 1</Radio>
          <Radio value="value2">item 2</Radio>
        </RadioList>
      );

      const radioElement1 = getByLabelText('item 1') as HTMLElement;
      const radioElement2 = getByLabelText('item 2') as HTMLElement;

      expect(radioElement1).not.toHaveAttribute('checked');
      expect(radioElement2).not.toHaveAttribute('checked');
    });

    it('selects the correct option for the value', () => {
      const { getByLabelText } = render(
        <RadioList
          label="test-label"
          name={testName}
          onChange={() => {}}
          value="value1"
        >
          <Radio value="value1">item 1</Radio>
          <Radio value="value2">item 2</Radio>
        </RadioList>
      );

      const radioElement1 = getByLabelText('item 1') as HTMLElement;
      const radioElement2 = getByLabelText('item 2') as HTMLElement;

      expect(radioElement1).toHaveAttribute('checked');
      expect(radioElement2).not.toHaveAttribute('checked');
    });

    it('calls onChange with the selected value', () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        <RadioList
          label="test-label"
          name={testName}
          onChange={onChange}
          value="value1"
        >
          <Radio value="value1">item 1</Radio>
          <Radio value="value2">item 2</Radio>
        </RadioList>
      );

      const radioElement2 = getByLabelText('item 2') as HTMLElement;

      userEvent.click(radioElement2);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith('value2');
    });
  });

  describe('snapshots', () => {
    it(`renders a radio list`, async () => {
      const { container } = render(
        <RadioList
          errorMessage="test error"
          label={testLabel}
          name={testName}
          onChange={() => {}}
          value={testValue}
        >
          <Radio value={testValue}>item 1</Radio>
          <Radio value="value2">item 2</Radio>
          <Radio value="value2" disabled>
            item 3
          </Radio>
        </RadioList>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
