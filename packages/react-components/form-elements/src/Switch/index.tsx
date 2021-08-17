import { useFocusRing } from '@react-aria/focus';
import {
  FormEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  Ref,
} from 'react';

import Content from './Content';
import Input from './Input';
import Label from './Label';
import Toggle from './Toggle';

// Most of the props are exposed for a documentation purposes, since they are covered by InputHTMLAttributes anyway
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
   * Text description of the switch element. If switch has no description aria-label should be provided.
   */
  children?: ReactNode;
  /**
   * Sets the CSS class on the switch wrapper element. It's used by emotion when applying custom styling. Could be used as an escape hatch to apply regular CSS rules.
   */
  className?: string;
  /**
   * Disables the switch element.
   */
  disabled?: boolean;
  /**
   * Switch toggle and label spans through the full parent or container width. Useful when placing multiple switches in the column next to each other, so toggles align nicely.
   */
  fullWidth?: boolean;
  /**
   * Called when the user requests a change to the value of the switch. In most cases should be used to set the checked property.
   */
  onChange?: FormEventHandler<HTMLInputElement>;
} & (
  | { 'aria-label'?: undefined; children: ReactNode }
  | { 'aria-label': string; children?: undefined }
) &
  InputHTMLAttributes<HTMLInputElement>;

function InternalSwitch({
  appearance = 'default',
  checked,
  children,
  className,
  disabled,
  fullWidth,
  innerRef,
  ...restProps
}: SwitchProps & { innerRef?: Ref<HTMLInputElement> }): JSX.Element {
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Label {...{ appearance, children, className, disabled, fullWidth }}>
      {children && <Content fullWidth={fullWidth}>{children}</Content>}
      <Input
        aria-checked={checked}
        disabled={disabled}
        ref={innerRef}
        role="switch"
        type="checkbox"
        {...restProps}
        {...focusProps}
      />
      <Toggle
        {...{ appearance, checked, hasLabel: !!children, isFocusVisible }}
      />
    </Label>
  );
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  return <InternalSwitch {...props} innerRef={ref} />;
});

export default Switch;
