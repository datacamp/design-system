import '@testing-library/jest-dom/extend-expect';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Select from '.';
import SelectOption from './Option';

describe('<Select>', () => {
  const testName = 'test-name';
  const testValue = 'test value';

  it('sets the correct name on the select element', () => {
    const { getByRole } = render(
      <Select name={testName} onChange={() => {}} value={testValue}>
        <SelectOption value={testValue}>option1</SelectOption>
        <SelectOption value={testValue}>option2</SelectOption>
      </Select>
    );

    const selectElement = getByRole('listbox') as HTMLElement;
    expect(selectElement).toHaveAttribute('name', testName);
  });

  it('renders options', () => {
    const { getByText } = render(
      <Select name={testName} onChange={() => {}} value={testValue}>
        <SelectOption value={testValue}>option1</SelectOption>
        <SelectOption value={testValue}>option2</SelectOption>
      </Select>
    );

    expect(getByText('option1')).toBeInTheDocument();
    expect(getByText('option2')).toBeInTheDocument();
  });

  it('sets the className ', () => {
    const testClassName = 'test-class';
    const { getByRole } = render(
      <Select
        className={testClassName}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <SelectOption value={testValue}>option1</SelectOption>
        <SelectOption value={testValue}>option2</SelectOption>
      </Select>
    );
    const selectElement = getByRole('listbox') as HTMLElement;

    expect(selectElement).toHaveClass(testClassName);
  });

  it('sets the data attributes', () => {
    const testDataAttributes = { test: 'example' };
    const { getByRole } = render(
      <Select
        dataAttributes={testDataAttributes}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <SelectOption value={testValue}>option1</SelectOption>
        <SelectOption value={testValue}>option2</SelectOption>
      </Select>
    );
    const selectElement = getByRole('listbox') as HTMLElement;

    expect(selectElement).toHaveAttribute('data-test', 'example');
  });

  it('calls the onBlur function', () => {
    const onBlur = jest.fn();
    const { getByRole } = render(
      <Select
        name={testName}
        onBlur={onBlur}
        onChange={() => {}}
        value={testValue}
      >
        <SelectOption value={testValue}>option1</SelectOption>
        <SelectOption value={testValue}>option2</SelectOption>
      </Select>
    );
    const selectElement = getByRole('listbox') as HTMLElement;

    fireEvent.blur(selectElement);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('calls the onChange function', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <Select name={testName} onChange={onChange} value={testValue}>
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    const selectElement = getByRole('listbox') as HTMLElement;

    userEvent.selectOptions(selectElement, 'value2');
    expect(onChange).toHaveBeenCalledWith('value2');
  });

  it('disables the select element', () => {
    const { getByRole } = render(
      <Select name={testName} onChange={() => {}} value={testValue} disabled>
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    const selectElement = getByRole('listbox') as HTMLElement;
    expect(selectElement).toHaveAttribute('disabled');
  });

  it('renders an arrow icon', async () => {
    const { getByTitle } = await render(
      <Select name={testName} onChange={() => {}} value={testValue} disabled>
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );

    const iconElement = getByTitle('Down Chevron') as HTMLElement;
    expect(iconElement).toBeInTheDocument();
  });

  it('renders a large select element if size="large"', () => {
    const { getByRole } = render(
      <Select
        name={testName}
        onChange={() => {}}
        size="large"
        value={testValue}
      >
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    const selectElement = getByRole('listbox') as HTMLElement;
    expect(selectElement).toHaveStyle(
      ` height: ${tokens.size.space[64].value}`
    );
    expect(selectElement).toHaveStyle('fontSize: 20');
    expect(selectElement).toHaveStyle(
      `paddingRight: ${tokens.size.space[64].value}px`
    );
  });

  it('renders a small select element if size="small"', () => {
    const { getByRole } = render(
      <Select
        name={testName}
        onChange={() => {}}
        size="small"
        value={testValue}
      >
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    const selectElement = getByRole('listbox') as HTMLElement;
    expect(selectElement).toHaveStyle(
      ` height: ${tokens.size.space[36].value}`
    );
    expect(selectElement).toHaveStyle('fontSize: 16');
    expect(selectElement).toHaveStyle(
      `paddingRight: ${tokens.size.space[36].value}px`
    );
  });

  it('renders a medium select element if size="medium"', () => {
    const { getByRole } = render(
      <Select
        name={testName}
        onChange={() => {}}
        size="medium"
        value={testValue}
      >
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    const selectElement = getByRole('listbox') as HTMLElement;
    expect(selectElement).toHaveStyle(
      ` height: ${tokens.size.space[48].value}`
    );
    expect(selectElement).toHaveStyle('fontSize: 16');
    expect(selectElement).toHaveStyle(
      `paddingRight: ${tokens.size.space[48].value}px`
    );
  });
});

describe('<SelectOption>', () => {
  const testValue = 'test value';

  it('sets the correct value on the SelectOption element', () => {
    const { getByRole } = render(
      <SelectOption value={testValue}>option2</SelectOption>
    );

    const optionElement = getByRole('option') as HTMLElement;
    expect(optionElement).toHaveAttribute('value', testValue);
  });

  it('sets the disabled attribute', () => {
    const { getByRole } = render(
      <SelectOption value={testValue} disabled>
        option2
      </SelectOption>
    );

    const optionElement = getByRole('option') as HTMLElement;
    expect(optionElement).toHaveAttribute('disabled');
  });
});

describe('with label', () => {
  const testName = 'this is a name';
  const testValue = 'this is a value';

  it('sets the label', () => {
    const testLabel = 'label text';
    const { getByText } = render(
      <Select
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    expect(getByText(testLabel)).toBeInTheDocument();
  });

  it('adds an error message under the input field if error is passed as a prop', () => {
    const testLabel = 'label text';
    const testError = 'Test error';

    const { getByText } = render(
      <Select
        errorMessage={testError}
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      >
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    expect(getByText(testError)).toBeInTheDocument();
    expect(getByText(testError)).toHaveStyle(
      `color: ${tokens.color.opaque.red.value.hex}`
    );
    expect(getByText(testError)).toHaveStyle(`font-size: '14px`);
  });

  it('renders the indication "required" above the input field if required is passed as a prop ', () => {
    const testLabel = 'label text';

    const { getByText } = render(
      <Select
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
        required
      >
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    expect(getByText('required')).toBeInTheDocument();
    expect(getByText('required')).toHaveStyle(
      `color: ${tokens.color.opaque.greyOslo.value.hex}`
    );
    expect(getByText('required')).toHaveStyle(`font-size: '14px`);
  });

  it('renders the indication "optional" above the input field if required={false} is passed as a prop ', () => {
    const testLabel = 'label text';

    const { getByText } = render(
      <Select
        label={testLabel}
        name={testName}
        onChange={() => {}}
        required={false}
        value={testValue}
      >
        <SelectOption value="value1">option1</SelectOption>
        <SelectOption value="value2">option2</SelectOption>
      </Select>
    );
    expect(getByText('optional')).toBeInTheDocument();
    expect(getByText('optional')).toHaveStyle(
      `color: ${tokens.color.opaque.greyOslo.value.hex}`
    );
    expect(getByText('optional')).toHaveStyle(`font-size: '14px`);
  });
});

describe('snapshots', () => {
  const exampleText = 'input text';

  const selectSizes: ('small' | 'medium' | 'large')[] = [
    'small',
    'medium',
    'large',
  ];
  const disabled: boolean[] = [true, false];
  const required: (boolean | undefined)[] = [undefined, true, false];

  selectSizes.forEach(size => {
    required.forEach(isRequired => {
      disabled.forEach(isDisabled => {
        it(`renders a select element with size ${size}, disabled=${isDisabled}, required=${isRequired}`, async () => {
          const { container } = await render(
            <Select
              disabled={isDisabled}
              errorMessage="test error"
              label="test label"
              name={exampleText}
              onChange={() => {}}
              required={isRequired}
              size={size}
              value=""
            >
              <SelectOption value="value1">option1</SelectOption>
              <SelectOption value="value2">option2</SelectOption>
              <SelectOption value="value3" disabled>
                option3
              </SelectOption>
            </Select>
          );
          expect(container.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});
