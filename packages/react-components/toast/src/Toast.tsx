import { CloseButton } from '@datacamp/waffles-button';
import {
  CheckmarkCircleInvertedIcon,
  CrossCircleInvertedIcon,
} from '@datacamp/waffles-icons';
import { Heading, Paragraph } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/react';

const colors = {
  error: tokens.color.primary.red.value.hex,
  success: tokens.color.primary.green.value.hex,
};

const icons = {
  error: CrossCircleInvertedIcon,
  success: CheckmarkCircleInvertedIcon,
};

const wrapperStyle = css({
  alignItems: 'center',
  background: 'white',
  borderRadius: 4,
  boxShadow:
    '0px 0px 1px 0px rgba(5, 25, 45, 0.3), 0px 8px 12px -4px rgba(5, 25, 45, 0.3)',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 512,
  minWidth: 250,
  position: 'relative',
  zIndex: parseInt(tokens.zIndex[999].value, 10),
});

const sideDecorStyle = css({
  borderRadius: '4px 0px 0px 4px',
  height: '100%',
  position: 'absolute',
  width: 4,
});

interface ToastProps {
  /**
   * Used internally. Do not explicitly set.
   */
  closeToast?: () => void;
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
  description,
  intent,
  title,
}: ToastProps): JSX.Element => {
  const Icon = icons[intent];
  const color = colors[intent];
  return (
    <div css={wrapperStyle}>
      <div css={css({ backgroundColor: color }, sideDecorStyle)} />
      <Icon
        color={color}
        css={css({ flexShrink: 0, marginLeft: 16 })}
        title={intent}
      />
      <div css={css({ flexGrow: 1, margin: 12 })}>
        <Heading as="h4" multiLine size={300}>
          {title}
        </Heading>
        {description && <Paragraph>{description}</Paragraph>}
      </div>
      {closeToast && (
        <CloseButton
          css={{ flex: 'none', marginRight: 12 }}
          onClick={closeToast}
          size="small"
        />
      )}
    </div>
  );
};

export default Toast;
