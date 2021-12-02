import { CloseButton } from '@datacamp/waffles-button';
import {
  CheckmarkCircleInvertedIcon,
  CrossCircleInvertedIcon,
} from '@datacamp/waffles-icons';
import { Heading, Paragraph } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';

const colors = {
  error: tokens.colors.red,
  success: tokens.colors.green,
};

const icons = {
  error: CrossCircleInvertedIcon,
  success: CheckmarkCircleInvertedIcon,
};

const wrapperStyle = css({
  alignItems: 'flex-start',
  background: 'white',
  borderLeftStyle: 'solid',
  borderLeftWidth: 4,
  borderRadius: 4,
  boxShadow:
    '0px 0px 1px 0px rgba(5, 25, 45, 0.3), 0px 8px 12px -4px rgba(5, 25, 45, 0.3)',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 512,
  minWidth: 250,
  padding: 16,
  position: 'relative',
  zIndex: tokens.zIndex.toast,
});

interface ToastProps {
  /**
   * Used internally. Do not explicitly set.
   */
  closeToast?: () => void;
  /**
   * Can be used to set data- html attributes on the element.
   */
  dataAttributes?: { [key: string]: string };
  /**
   * Optional content to display in the toast below title.
   */
  description?: string;
  /**
   * Determines the color and icon displayed in the toast.
   */
  intent: 'success' | 'error';
  /**
   * The main content to display in the toast.
   */
  title: string;
}

const Toast = ({
  closeToast,
  dataAttributes,
  description,
  intent,
  title,
}: ToastProps): JSX.Element => {
  const Icon = icons[intent];
  const color = colors[intent];
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <div
      css={css({ borderColor: color }, wrapperStyle)}
      {...parsedDataAttributes}
      data-testid="toast-wrapper"
    >
      <Icon css={css({ flexShrink: 0, marginTop: 2 })} title={intent} />
      <div
        css={css({ flexGrow: 1, marginLeft: 12, marginRight: 8, marginTop: 2 })}
      >
        <Heading as="h4" multiLine size={500}>
          {title}
        </Heading>
        {description && (
          <Paragraph css={css({ color: tokens.colors.navySubtleTextOnLight })}>
            {description}
          </Paragraph>
        )}
      </div>
      {closeToast && (
        <CloseButton
          css={{ flexShrink: 0 }}
          onClick={closeToast}
          size="small"
        />
      )}
    </div>
  );
};

export default Toast;
