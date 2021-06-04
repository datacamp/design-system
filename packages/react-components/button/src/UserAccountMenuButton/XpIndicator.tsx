import { Badge } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const wrapperStyle = css({
  borderBottom: `1px solid ${tokens.colors.beige400}`,
  marginBottom: 8,
  padding: 8,
});

const badgeStyle = css({
  borderRadius: 2,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: '24px',
  width: '100%',
});

type XpIndicatorProps = {
  totalXp?: number;
};

function XpIndicator({ totalXp = 650 }: XpIndicatorProps): JSX.Element {
  return (
    <div css={wrapperStyle}>
      <Badge color={tokens.colors.purple} css={badgeStyle} size="large">
        {`${totalXp} XP`}
      </Badge>
    </div>
  );
}

export default XpIndicator;
