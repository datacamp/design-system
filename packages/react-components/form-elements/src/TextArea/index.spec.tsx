import '@testing-library/jest-dom/extend-expect';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import TextArea from '.';

describe('<TextArea />', () => {
  describe('without label', () => {
    // cannot use axeRender here as no label will fail

    const testName = 'test-name';
    const testValue = 'test value';

    it('sets the correct name and value on the input', () => {
      const { getByRole } = render(
        <TextArea name={testName} onChange={() => {}} value={testValue} />,
      );

      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveAttribute('name', testName);
      expect(inputElement).toHaveTextContent(testValue);
    });

    it('sets the autocomplete attribute', () => {
      const testAutocomplete = 'off';
      const { getByRole } = render(
        <TextArea
          autocomplete={testAutocomplete}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />,
      );

      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveAttribute('autocomplete', testAutocomplete);
    });

    it('sets the className ', () => {
      const testClassName = 'test-class';
      const { getByRole } = render(
        <TextArea
          className={testClassName}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />,
      );
      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveClass(testClassName);
    });

    it('sets the data attributes', () => {
      const testDataAttributes = { test: 'example' };
      const { getByRole } = render(
        <TextArea
          dataAttributes={testDataAttributes}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />,
      );
      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveAttribute('data-test', 'example');
    });

    it('sets the maxLength', () => {
      const maxLength = 5;
      const { getByRole } = render(
        <TextArea
          maxLength={maxLength}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />,
      );

      const inputElement = getByRole('textbox') as HTMLElement;

      expect(inputElement).toHaveAttribute('maxLength', maxLength.toString());
    });

    it('calls the onBlur function', () => {
      const onBlur = jest.fn();
      const { getByRole } = render(
        <TextArea
          name={testName}
          onBlur={onBlur}
          onChange={() => {}}
          value={testValue}
        />,
      );

      const inputElement = getByRole('textbox') as HTMLElement;

      fireEvent.blur(inputElement);
      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('calls the onChange function', () => {
      const onChange = jest.fn();
      const { getByRole } = render(
        <TextArea name={testName} onChange={onChange} value={testValue} />,
      );
      const testString = 'test string';
      const inputElement = getByRole('textbox') as HTMLElement;

      userEvent.type(inputElement, testString);
      expect(onChange).toHaveBeenCalledWith(testValue + testString);
    });

    it('sets the placeholder', () => {
      const placeholder = 'placeholder text';
      const { getByRole } = render(
        <TextArea
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
        />,
      );
      expect(getByRole('textbox') as HTMLElement).toHaveAttribute(
        'placeholder',
        placeholder,
      );
    });

    it('disables the input if disabled is passed as a prop', () => {
      const { getByRole } = render(
        <TextArea
          disabled
          name={testName}
          onChange={() => {}}
          value={testValue}
        />,
      );
      expect(getByRole('textbox')).toHaveAttribute('disabled');
    });

    it('sets the id', () => {
      const testId = 'name input';
      const { getByRole } = render(
        <TextArea
          id={testId}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />,
      );
      expect(getByRole('textbox')).toHaveAttribute('id', testId);
    });

    it('disables the input if "disabled" is passed as a prop', () => {
      const placeholder = 'placeholder text';
      const { getByRole } = render(
        <TextArea
          disabled
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          value={testValue}
        />,
      );
      expect(getByRole('textbox')).toHaveAttribute('disabled');
    });

    it('sets the rows attribute', () => {
      const placeholder = 'placeholder text';
      const { getByRole } = render(
        <TextArea
          name={testName}
          onChange={() => {}}
          placeholder={placeholder}
          rows={4}
          value={testValue}
        />,
      );
      expect(getByRole('textbox')).toHaveAttribute('rows', '4');
    });

    it('adds an error message under the input field if error is passed as a prop', () => {
      const testLabel = 'label text';
      const testError = 'Test error';

      const { getByText } = render(
        <TextArea
          errorMessage={testError}
          label={testLabel}
          name={testName}
          onChange={() => {}}
          value={testValue}
        />,
      );
      expect(getByText(testError)).toBeInTheDocument();
      expect(getByText(testError)).toHaveStyle(
        `color: ${tokens.color.primary.red.value.hex}`,
      );
      expect(getByText(testError)).toHaveStyle(`font-size: 14px`);
    });

    it('renders the indication "required" above the input field if required is passed as a prop ', () => {
      const testLabel = 'label text';

      const { getByText } = render(
        <TextArea
          label={testLabel}
          name={testName}
          onChange={() => {}}
          required
          value={testValue}
        />,
      );
      expect(getByText('Required')).toBeInTheDocument();
      expect(getByText('Required')).toHaveStyle(
        `color: ${tokens.color.primary.navyText.value.hex};`,
      );
      expect(getByText('Required')).toHaveStyle(`font-size: 14px;`);
    });

    it('renders the indication "Optional" above the input field if required={false} is passed as a prop ', () => {
      const testLabel = 'label text';

      const { getByText } = render(
        <TextArea
          label={testLabel}
          name={testName}
          onChange={() => {}}
          required={false}
          value={testValue}
        />,
      );
      expect(getByText('Optional')).toBeInTheDocument();
      expect(getByText('Optional')).toHaveStyle(
        `color: ${tokens.color.primary.navyText.value.hex};`,
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
      <TextArea
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      />,
    );
    expect(getByLabelText(testLabel)).toBeInTheDocument();
  });

  it('sets the description', () => {
    const testLabel = 'label text';
    const testDescription = 'description text';
    const { getByText } = render(
      <TextArea
        description={testDescription}
        label={testLabel}
        name={testName}
        onChange={() => {}}
        value={testValue}
      />,
    );
    expect(getByText(testDescription)).toBeInTheDocument();
  });
});

describe('snapshots', () => {
  const exampleText = 'input text';

  const disabled: boolean[] = [true, false];
  const required: (boolean | undefined)[] = [undefined, true, false];

  required.forEach(isRequired => {
    disabled.forEach(isDisabled => {
      it(`renders an input with size disabled=${isDisabled}, required=${isRequired}`, async () => {
        const { container } = render(
          <TextArea
            disabled={isDisabled}
            errorMessage="test error"
            label="test label"
            name={exampleText}
            onChange={() => {}}
            placeholder={exampleText}
            required={isRequired}
            value=""
          />,
        );
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});
