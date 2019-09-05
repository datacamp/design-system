import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Input from '.';

describe('<Input />', () => {
  describe('without label', () => {
    // cannot use axeRender here as no label will fail

    const testName = 'test name';
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
  });
});
