import '@testing-library/jest-dom/extend-expect';

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
      const { container } = render(
        <Input name={testName} onChange={() => {}} value={testValue} />
      );
      expect(container.firstChild).toHaveAttribute('name', testName);
      expect(container.firstChild).toHaveAttribute('value', testValue);
    });

    it('sets the autocomplete attribute', () => {
      const testAutocomplete = 'off';
      const { container } = render(
        <Input
          autocomplete={testAutocomplete}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveAttribute(
        'autocomplete',
        testAutocomplete
      );
    });

    it('sets the className ', () => {
      const testClassName = 'test-class';
      const { container } = render(
        <Input
          className={testClassName}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveClass(testClassName);
    });

    it('sets the data attributes', () => {
      const testDataAttributes = { test: 'example' };
      const { container } = render(
        <Input
          dataAttributes={testDataAttributes}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveAttribute('data-test', 'example');
    });

    it('sets the maxLength', () => {
      const maxLength = 5;
      const { container } = render(
        <Input
          maxLength={maxLength}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveAttribute(
        'maxLength',
        maxLength.toString()
      );
    });

    it('calls the onBlur function', () => {
      const onBlur = jest.fn();
      const { container } = render(
        <Input
          name={testName}
          onBlur={onBlur}
          onChange={() => {}}
          value={testValue}
        />
      );

      fireEvent.blur(container.firstChild as HTMLElement);
      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('calls the onChange function', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Input name={testName} onChange={onChange} value={testValue} />
      );
      const testString = 'test string';
      userEvent.type(container.firstChild as HTMLElement, testString);
      expect(onChange).toHaveBeenCalledWith(testString);
    });

    it('sets the placeholder', () => {
      const placeholder = 'placeholder text';
      const { container } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveAttribute('placeholder', placeholder);
    });

    it('disables the input if disabled is passed as a prop', () => {
      const { container } = render(
        <Input name={testName} onChange={() => {}} value={testValue} disabled />
      );
      expect(container.firstChild).toHaveAttribute('disabled');
    });

    it('sets the label', () => {
      const testLabel = 'labelText';
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

    it('sets the id', () => {
      const testId = 'name input';
      const { container } = render(
        <Input
          id={testId}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveAttribute('id', testId);
    });

    it('disables the input if "disabled" is passed as a prop', () => {
      const placeholder = 'placeholder text';
      const { container } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
          disabled
        />
      );
      expect(container.firstChild).toHaveAttribute('disabled');
    });

    it('renders a small text input if size= "small" ', () => {
      const placeholder = 'placeholder text';
      const { container } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveStyle(`height: 36`);
      expect(container.firstChild).toHaveStyle(`fontSize: 16`);
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
      expect(container.firstChild).toHaveStyle(`height: 48`);
      expect(container.firstChild).toHaveStyle(`fontSize: 16`);
    });

    it('renders a medium text input if size= "large" ', () => {
      const placeholder = 'placeholder text';
      const { container } = render(
        <Input
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
        />
      );
      expect(container.firstChild).toHaveStyle(`height: 64`);
      expect(container.firstChild).toHaveStyle(`fontSize: 20`);
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
      expect(getByText(testError)).toHaveStyle(`font-size: '14px`);
    });
  });
});

describe('snapshots', () => {
  const exampleText = 'input text';

  const inputSizes: ('small' | 'medium' | 'large')[] = [
    'small',
    'medium',
    'large',
  ];

  const isDisabled: boolean[] = [true, false];
  inputSizes.forEach(size => {
    isDisabled.forEach(disabled => {
      it(`renders an input with size ${size} and disabled ${disabled}`, async () => {
        const { container } = render(
          <Input
            disabled={disabled}
            name={exampleText}
            onChange={() => {}}
            placeholder={exampleText}
            size={size}
            value=""
          />
        );
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
