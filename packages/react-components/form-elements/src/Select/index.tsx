import { ChevronDownIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { Component, forwardRef, ReactElement, Ref } from 'react';

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
  /**
   * When provided the description will show underneath the label. Only
   * available when 'label' is also specified.
   */
  description?: string;
  /**
   * Disables the Select when true.
   */
  disabled?: boolean;
  /**
   * When provided the errorMessage will show underneath the Select. Only
   * available when label is also specified.
   */
  errorMessage?: string;
  /**
   * Renders label text above the Select. If this is not provided the Select will
   * render inline. When a label is provided many other props are also available
   * and this component becomes a block that can be stacked with other form
   * elements.
   */
  label?: string;
  /**
   * Sets the name attribute on the rendered select.
   */
  name: string;
  /**
   * Called when the user removes focus from the select.
   */
  onBlur?: () => void;
  /**
   * Called when the user requests a change to the value of the select. This
   * should be used to set the value.
   */
  onChange: (value: string) => void;
  /**
   * It defines wheter the select field is required or not. If required=true it
   * adds the text 'Required' on the top-right of the select, if required=false
   * it adds 'Optional'. The default value is undefined, which doesn't add
   * anything. This is only available when 'label' is also provided.
   */
  required?: boolean;
  /**
   * The size of the select element.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The current value of the select. This should be controlled by listening to
   * onChange.
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

class Select extends Component<
  SelectProps & { innerRef?: Ref<HTMLSelectElement> },
  SelectState
> {
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
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const { onChange } = this.props;
    return onChange(event.target.value);
  };

  private handleBlur = (): void => {
    this.setState({ focus: false });
    const { onBlur } = this.props;
    if (onBlur) onBlur();
  };

  public static Option = Option;

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
        : tokens.color.opaque.greyDark.value.rgb,
      width: label && '100%',
    });

    const getColor = disabled
      ? tokens.color.opaque.greyLight.value.rgb
      : tokens.color.opaque.greyOslo.value.rgb;

    const selectElement = (
      <div css={{ position: 'relative' }}>
        <select
          className={className}
          css={getSelectStyle}
          disabled={disabled}
          name={name}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.setFocus}
          ref={innerRef}
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

Select.propTypes = {
  /**
   * Takes multiple SelectOption components as children.
   */
  children: PropTypes.arrayOf(childrenOfType(Option)).isRequired,
};

export default forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <Select {...props} innerRef={ref} />
));
