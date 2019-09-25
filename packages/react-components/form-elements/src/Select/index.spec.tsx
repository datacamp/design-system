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
      ` padding: 0 ${tokens.size.space[64].value}px  `
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
      ` padding: 0 ${tokens.size.space[36].value}px  `
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
      ` padding: 0 ${tokens.size.space[48].value}px  `
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
