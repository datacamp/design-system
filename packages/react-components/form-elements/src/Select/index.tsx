import { ChevronDownIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { Component, forwardRef, ReactElement } from 'react';

import {
  arrowIconPosition,
  baseFormSizes,
  selectIconSizes,
  selectPaddings,
  selectStyle,
} from '../formStyles';
import Label from '../Label';
import Option, { OptionProps } from './Option';

interface SelectProps {
  children: ReactElement<OptionProps>[];
  /**
   * Sets the class on the rendered element.
   */
  className?: string;
  /**
   * An object who's keys will be prepended with 'data-', and values will be
   * used as attributes on the rendered element.
   */
  dataAttributes?: { [key: string]: string };
  description?: string;
  /**
   * It blocks user interaction.
   */
  disabled?: boolean;
  /**
   * It shows an error message under the select element.
   */
  errorMessage?: string;
  /**
   * ref
   */
  innerRef?: React.Ref<HTMLSelectElement>;
  /**
   * It sets a label above the select element
   */
  label?: string;
  /**
   * Used to set the html name attribute. Uniquely indentifies the select within
   * the current form context.
   */
  name: string;
  /**
   * Called when the user removes focus from the select.
   */
  onBlur?: () => void;
  /**
   * Called when the user changes the value selected
   */
  onChange: (value: string) => void;
  /*
   * It defines wheter the select element is required or not. If required=true it adds the text 'required' on the top-right of the select, if required=false it adds 'optional'. The default value is undefined, which doesn't add anything.
   */
  required?: boolean;
  /**
   * Select the size for the select element.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The value of the select element. This should be controlled by listening to onChange.
   */
  value: string;
}

interface SelectState {
  focus: boolean;
}

const iconStyle = css({
  pointerEvents: 'none',
  position: 'absolute',
});

class Select extends Component<SelectProps, SelectState> {
  public static Option = Option;

  public static propTypes = {
    children: PropTypes.arrayOf(childrenOfType(Option)).isRequired,
  };

  public constructor(props: SelectProps) {
    super(props);
    this.state = { focus: false };
  }

  private setFocus = (): void => {
    this.setState({ focus: true });
  };

  private handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { onChange } = this.props;
    return onChange(event.target.value);
  };

  private handleBlur = (): void => {
    this.setState({ focus: false });
    const { onBlur } = this.props;
    if (onBlur) onBlur();
  };

  public render(): ReactElement {
    const {
      children,
      className,
      dataAttributes,
      disabled = false,
      errorMessage = undefined,
      innerRef,
      label,
      name,
      size = 'medium',
      required = undefined,
      value,
      description,
    } = this.props;

    const { focus } = this.state;
    const parsedDataAttributes = computeDataAttributes(dataAttributes);

    const selectSizes = css(baseFormSizes[size], selectPaddings[size]);

    const getSelectStyle = css(selectStyle, selectSizes, {
      color: disabled
        ? tokens.color.opaque.greyLight.value.rgb
        : tokens.color.opaque.greyOslo.value.rgb,
      width: label && '100%',
    });

    const getColor = disabled
      ? tokens.color.opaque.greyLight.value.rgb
      : tokens.color.opaque.greyOslo.value.rgb;

    const selectElement = (
      <div css={{ position: 'relative' }}>
        <select
          ref={innerRef}
          className={className}
          css={getSelectStyle}
          disabled={disabled}
          name={name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.setFocus}
          value={value}
          {...parsedDataAttributes}
        >
          {children}
        </select>
        <ChevronDownIcon
          color={focus ? tokens.color.opaque.primary.value.rgb : getColor}
          css={css(iconStyle, arrowIconPosition[size])}
          size={selectIconSizes[size]}
        />
      </div>
    );

    return label ? (
      <Label
        description={description}
        errorMessage={errorMessage}
        htmlFor={name}
        label={label}
        required={required}
      >
        {selectElement}
      </Label>
    ) : (
      <>{selectElement}</>
    );
  }
}

export default forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <Select {...props} innerRef={ref} />
));
