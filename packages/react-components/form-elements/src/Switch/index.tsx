import { useFocusRing } from '@react-aria/focus';
import { FormEvent, InputHTMLAttributes, ReactNode } from 'react';

import Input from './Input';
import Label from './Label';
import Toggle from './Toggle';

// Most of the props are exposed for documentation purposes, since they are covered by InputHTMLAttributes anyway
export type SwitchProps = {
  /**
   * When the appearance is "inverted", the text color and toggle background color will be white for use on dark backgrounds.
   */
  appearance?: 'default' | 'inverted';
  /**
   * Whether switch toggle is turned on or off.
   */
  checked?: boolean;
  /**
   * Description of the switch element.
   */
  children?: ReactNode;
  /**
   * Sets the css className on the switch wrapper element. It's used by emotion when applying custom styling.
   */
  className?: string;
  /**
   * Disables the switch element.
   */
  disabled?: boolean;
  /**
   * Called when the user requests a change to the value of the switch. In most cases should be used to set the checked property.
   */
  onChange?: (event?: FormEvent<HTMLInputElement>) => void;
} & (
  | { 'aria-label'?: undefined; children: ReactNode }
  | { 'aria-label': string; children?: undefined }
) &
  InputHTMLAttributes<HTMLInputElement>;

function Switch({
  appearance = 'default',
  checked,
  children,
  className,
  disabled,
  ...restProps
}: SwitchProps): JSX.Element {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Label {...{ appearance, children, className, disabled }}>
      <Input
        aria-checked={checked}
        disabled={disabled}
        role="switch"
        type="checkbox"
        {...restProps}
        {...focusProps}
      />
      <Toggle
        {...{ appearance, checked, hasLabel: !!children, isFocusVisible }}
      />
      {children}
    </Label>
  );
}

export default Switch;
