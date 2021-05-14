import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const wrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${tokens.colors.beige400};
  margin-top: 8px;
  padding: 8px;
  width: 100%;
  border-radius: ${tokens.border.radius};
`;

type Preview = {
  children: React.ReactNode;
  className?: string;
  isInverted?: boolean;
};

function Preview({
  children,
  className,
  isInverted = false,
}: Preview): JSX.Element {
  return (
    <div
      className={className}
      css={css`
        ${wrapperStyle}
        ${isInverted &&
        css`
          border: none;
        `};
        background-color: ${isInverted
          ? tokens.colors.navyLight
          : 'transparent'};
      `}
    >
      {children}
    </div>
  );
}

export default Preview;
