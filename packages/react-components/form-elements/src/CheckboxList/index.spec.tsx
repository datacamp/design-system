import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Checkbox from './Checkbox';
import CheckboxList from './index';

const testName = 'test-name';
const testValue = ['test value'];
const testLabel = 'test label';

describe('<CheckboxList>', () => {
  it('renders the list', () => {
    const { getByLabelText, getByText, debug } = render(
      <CheckboxList
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <Checkbox value={testValue[0]}>item 1</Checkbox>
        <Checkbox value="value2">item 2</Checkbox>
      </CheckboxList>,
    );

    expect(getByText(testLabel) as HTMLElement).toBeInTheDocument();
    debug();
    const item1 = getByLabelText('item 1') as HTMLElement;
    const item2 = getByLabelText('item 2') as HTMLElement;

    // all elements have the name
    expect(item1).toHaveAttribute('name', testName);
    expect(item2).toHaveAttribute('name', testName);
  });

  describe('required', () => {
    it('renders the indication "Required" above the checkbox group if required is passed as a prop', () => {
      const { getByText } = render(
        <CheckboxList
          label={testLabel}
          name={testName}
          onChange={() => {}}
          required
          value={testValue}
        >
          <Checkbox value={testValue[0]}>item 1</Checkbox>
          <Checkbox value="value2">item 2</Checkbox>
        </CheckboxList>,
      );

      expect(getByText('Required')).toBeInTheDocument();
    });
    it('renders the indication "Optional" above the checkbox group if required=false is passed as a prop', () => {
      const { getByText } = render(
        <CheckboxList
          label={testLabel}
          name={testName}
          onChange={() => {}}
          required={false}
          value={testValue}
        >
          <Checkbox value={testValue[0]}>item 1</Checkbox>
          <Checkbox value="value2">item 2</Checkbox>
        </CheckboxList>,
      );

      expect(getByText('Optional')).toBeInTheDocument();
    });
  });

  it('adds an error message under the checkbox group if error is passed as a prop', () => {
    const testError = 'Test error';

    const { getByText } = render(
      <CheckboxList
        errorMessage={testError}
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <Checkbox value={testValue[0]}>item 1</Checkbox>
        <Checkbox value="value2">item 2</Checkbox>
      </CheckboxList>,
    );
    expect(getByText(testError)).toBeInTheDocument();
  });

  it('disables the whole component', () => {
    const { getByLabelText } = render(
      <CheckboxList
        disabled
        label="test-label"
        name={testName}
        onChange={() => {}}
        value={['value1']}
      >
        <Checkbox value="value1">item 1</Checkbox>
        <Checkbox value="value2">item 2</Checkbox>
      </CheckboxList>,
    );

    const radioElement1 = getByLabelText('item 1') as HTMLElement;
    const radioElement2 = getByLabelText('item 2') as HTMLElement;

    expect(radioElement1).toHaveAttribute('disabled');
    expect(radioElement2).toHaveAttribute('disabled');
  });

  it('disables an individual option', () => {
    const { getByLabelText } = render(
      <CheckboxList
        label="test-label"
        name={testName}
        onChange={() => {}}
        value={['value1']}
      >
        <Checkbox value="value1">item 1</Checkbox>
        <Checkbox disabled value="value2">
          item 2
        </Checkbox>
      </CheckboxList>,
    );

    const radioElement1 = getByLabelText('item 1') as HTMLElement;
    const radioElement2 = getByLabelText('item 2') as HTMLElement;

    expect(radioElement1).not.toHaveAttribute('disabled');
    expect(radioElement2).toHaveAttribute('disabled');
  });

  describe('interactivity', () => {
    it('has no selected option when value is invalid', () => {
      const { getByLabelText } = render(
        <CheckboxList
          label="test-label"
          name={testName}
          onChange={() => {}}
          value={['']}
        >
          <Checkbox value="value1">item 1</Checkbox>
          <Checkbox value="value2">item 2</Checkbox>
        </CheckboxList>,
      );

      const radioElement1 = getByLabelText('item 1') as HTMLElement;
      const radioElement2 = getByLabelText('item 2') as HTMLElement;

      expect(radioElement1).not.toHaveAttribute('checked');
      expect(radioElement2).not.toHaveAttribute('checked');
    });

    it('selects the correct option for the value', () => {
      const { getByLabelText } = render(
        <CheckboxList
          label="test-label"
          name={testName}
          onChange={() => {}}
          value={['value1']}
        >
          <Checkbox value="value1">item 1</Checkbox>
          <Checkbox value="value2">item 2</Checkbox>
        </CheckboxList>,
      );

      const radioElement1 = getByLabelText('item 1') as HTMLElement;
      const radioElement2 = getByLabelText('item 2') as HTMLElement;

      expect(radioElement1).toHaveAttribute('checked');
      expect(radioElement2).not.toHaveAttribute('checked');
    });

    it('calls onChange with the selected value', () => {
      const onChange = jest.fn();
      const { getByLabelText } = render(
        <CheckboxList
          label="test-label"
          name={testName}
          onChange={onChange}
          value={['value1']}
        >
          <Checkbox value="value1">item 1</Checkbox>
          <Checkbox value="value2">item 2</Checkbox>
        </CheckboxList>,
      );

      const radioElement2 = getByLabelText('item 2') as HTMLElement;

      userEvent.click(radioElement2);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(['value1', 'value2']);
    });
  });

  describe('snapshots', () => {
    it(`renders a checkbox list`, async () => {
      const { container } = render(
        <CheckboxList
          errorMessage="test error"
          label={testLabel}
          name={testName}
          onChange={() => {}}
          value={testValue}
        >
          <Checkbox value={testValue[0]}>item 1</Checkbox>
          <Checkbox value="value2">item 2</Checkbox>
          <Checkbox disabled value="value2">
            item 3
          </Checkbox>
        </CheckboxList>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
