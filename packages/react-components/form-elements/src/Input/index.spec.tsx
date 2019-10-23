import '@testing-library/jest-dom/extend-expect';

import { AddCircleIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Input from '.';

describe('<Input />', () => {
  describe('without label', () => {
    // cannot use axeRender here as no label will fail

    const testName = 'test-name';
    const testValue = 'test value';

    it('sets the correct name and value on the input', () => {
      const { getByRole } = render(
        <Input name={testName} onChange={() => {}} value={testValue} />
      );

      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveAttribute('name', testName);
      expect(inputElement).toHaveAttribute('value', testValue);
    });

    it('sets the autocomplete attribute', () => {
      const testAutocomplete = 'off';
      const { getByRole } = render(
        <Input
          autocomplete={testAutocomplete}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );

      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveAttribute('autocomplete', testAutocomplete);
    });

    it('sets the className ', () => {
      const testClassName = 'test-class';
      const { getByRole } = render(
        <Input
          className={testClassName}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveClass(testClassName);
    });

    it('sets the data attributes', () => {
      const testDataAttributes = { test: 'example' };
      const { getByRole } = render(
        <Input
          dataAttributes={testDataAttributes}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveAttribute('data-test', 'example');
    });

    it('sets the maxLength', () => {
      const maxLength = 5;
      const { getByRole } = render(
        <Input
          maxLength={maxLength}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );

      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveAttribute('maxLength', maxLength.toString());
    });

    it('calls the onBlur function', () => {
      const onBlur = jest.fn();
      const { getByRole } = render(
        <Input
          name={testName}
          onBlur={onBlur}
          onChange={() => {}}
          value={testValue}
        />
      );

      const inputElement = getByRole('textbox') as HTMLElement;

      fireEvent.blur(inputElement);
      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('calls the onChange function', () => {
      const onChange = jest.fn();
      const { getByRole } = render(
        <Input name={testName} onChange={onChange} value={testValue} />
      );
      const testString = 'test string';
      const inputElement = getByRole('textbox') as HTMLElement;

      userEvent.type(inputElement, testString);
      expect(onChange).toHaveBeenCalledWith(testString);
    });

    it('sets the placeholder', () => {
      const placeholder = 'placeholder text';
      const { getByRole } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
        />
      );
      expect(getByRole('textbox') as HTMLElement).toHaveAttribute(
        'placeholder',
        placeholder
      );
    });

    it('disables the input if disabled is passed as a prop', () => {
      const { getByRole } = render(
        <Input name={testName} onChange={() => {}} value={testValue} disabled />
      );
      expect(getByRole('textbox')).toHaveAttribute('disabled');
    });

    it('renders an icon inside the input field', async () => {
      const placeholder = 'placeholder text';

      const { container, getByTitle } = await render(
        <Input
          icon={<AddCircleIcon />}
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
        />
      );

      const iconElement = getByTitle('Add') as HTMLElement;
      expect(container.firstChild).toContainElement(iconElement);
    });

    it('sets the id', () => {
      const testId = 'name input';
      const { getByRole } = render(
        <Input
          id={testId}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      expect(getByRole('textbox')).toHaveAttribute('id', testId);
    });

    it('disables the input if "disabled" is passed as a prop', () => {
      const placeholder = 'placeholder text';
      const { getByRole } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
          disabled
        />
      );
      expect(getByRole('textbox')).toHaveAttribute('disabled');
    });

    it('renders a small text input if size= "small" ', () => {
      const placeholder = 'placeholder text';
      const { container } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          size="small"
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveStyle(`height: 36px;`);
      expect(container.firstChild).toHaveStyle(`font-size: 16px;`);
    });

    it('renders a medium text input if size= "medium" or undefined', () => {
      const placeholder = 'placeholder text';
      const { container } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveStyle(`height: 48px;`);
      expect(container.firstChild).toHaveStyle(`font-size: 16px;`);
    });

    it('renders a medium text input if size= "large" ', () => {
      const placeholder = 'placeholder text';
      const { container } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          size="large"
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveStyle(`height: 64px;`);
      expect(container.firstChild).toHaveStyle(`font-size: 20px;`);
    });

    it('adds an error message under the input field if error is passed as a prop', () => {
      const testLabel = 'label text';
      const testError = 'Test error';

      const { getByText } = render(
        <Input
          errorMessage={testError}
          label={testLabel}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      expect(getByText(testError)).toBeInTheDocument();
      expect(getByText(testError)).toHaveStyle(
        `color: ${tokens.color.opaque.red.value.hex}`
      );
      expect(getByText(testError)).toHaveStyle(`font-size: 14px`);
    });

    it('renders the indication "required" above the input field if required is passed as a prop ', () => {
      const testLabel = 'label text';

      const { getByText } = render(
        <Input
          label={testLabel}
          name={testName}
          onChange={() => {}}
          value={testValue}
          required
        />
      );
      expect(getByText('Required')).toBeInTheDocument();
      expect(getByText('Required')).toHaveStyle(
        `color: ${tokens.color.opaque.greyOslo.value.hex};`
      );
      expect(getByText('Required')).toHaveStyle(`font-size: 14px;`);
    });

    it('renders the indication "Optional" above the input field if required={false} is passed as a prop ', () => {
      const testLabel = 'label text';

      const { getByText } = render(
        <Input
          label={testLabel}
          name={testName}
          onChange={() => {}}
          required={false}
          value={testValue}
        />
      );
      expect(getByText('Optional')).toBeInTheDocument();
      expect(getByText('Optional')).toHaveStyle(
        `color: ${tokens.color.opaque.greyOslo.value.hex};`
      );
      expect(getByText('Optional')).toHaveStyle(`font-size: 14px;`);
    });
  });
});

describe('with label', () => {
  const testName = 'test name';
  const testValue = 'test value';
  it('sets the label', () => {
    const testLabel = 'label text';
    const { getByLabelText } = render(
      <Input
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      />
    );
    expect(getByLabelText(testLabel)).toBeInTheDocument();
  });

  it('sets the description', () => {
    const testLabel = 'label text';
    const testDescription = 'description text';
    const { getByText } = render(
      <Input
        description={testDescription}
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      />
    );
    expect(getByText(testDescription)).toBeInTheDocument();
  });
});

describe('snapshots', () => {
  const exampleText = 'input text';

  const inputSizes: ('small' | 'medium' | 'large')[] = [
    'small',
    'medium',
    'large',
  ];
  const disabled: boolean[] = [true, false];
  const required: (boolean | undefined)[] = [undefined, true, false];

  inputSizes.forEach(size => {
    required.forEach(isRequired => {
      disabled.forEach(isDisabled => {
        it(`renders an input with size ${size}, disabled=${isDisabled}, required=${isRequired}`, async () => {
          const { container } = await render(
            <Input
              disabled={isDisabled}
              errorMessage="test error"
              label="test label"
              name={exampleText}
              onChange={() => {}}
              placeholder={exampleText}
              required={isRequired}
              size={size}
              value=""
            />
          );
          expect(container.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});
