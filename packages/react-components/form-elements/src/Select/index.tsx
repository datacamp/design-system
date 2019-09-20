import { ChevronDownIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { ClassNames, css } from '@emotion/core';
import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { Component, forwardRef, ReactElement } from 'react';

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
   * It blocks user interaction.
   */
  disabled?: boolean;
  /**
   * ref
   */
  innerRef?: React.Ref<HTMLSelectElement>;
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
  /**
   * The value of the select element. This should be controlled by listening to onChange.
   */
  value: string;
}

interface SelectState {
  focus: boolean;
}

const selectStyle = css({
  ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
    boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.greyLight.value.rgb}`,
    cursor: 'not-allowed',
  },
  ':focus': {
    boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.primary.value.rgb}`,
    outline: 'none',
  },
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',
  background: 'white',
  border: 0,
  borderRadius: tokens.radii.small.value,
  boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.greyLight.value.rgb}`,
  boxSizing: 'border-box',
  display: 'inline-block',
  fontFamily: [
    tokens.asset.font.sansSerif.attributes.fallback,
    tokens.asset.font.sansSerif.value,
  ],
  fontSize: '16px',
  margin: 0,
  padding: '8px 34px 8px 16px',
  verticalAlign: 'baseline',
  width: '100%',
  zIndex: 1,
});

const iconStyle = css({
  pointerEvents: 'none',
  position: 'absolute',
  right: tokens.size.space[8].value,
  top: tokens.size.space[12].value,
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
      innerRef,
      name,
      value,
    } = this.props;

    const { focus } = this.state;
    const parsedDataAttributes = computeDataAttributes(dataAttributes);

    const getSelectStyle = css(selectStyle, {
      color: disabled
        ? tokens.color.opaque.greyLight.value.rgb
        : tokens.color.opaque.greyOslo.value.rgb,
    });

    const getColor = disabled
      ? tokens.color.opaque.greyLight.value.rgb
      : tokens.color.opaque.greyOslo.value.rgb;

    return (
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
        <ClassNames>
          {({ css: getClassName }) =>
            React.cloneElement(<ChevronDownIcon />, {
              className: getClassName(iconStyle),
              color: focus ? tokens.color.opaque.primary.value.rgb : getColor,
            })
          }
        </ClassNames>
      </div>
    );
  }
}

export default forwardRef<HTMLSelectElement, SelectProps>((props, ref) => (
  <Select {...props} innerRef={ref} />
));
