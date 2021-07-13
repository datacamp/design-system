import { Badge } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const wrapperStyle = css({
  borderBottom: `${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium}`,
  boxSizing: 'border-box',
  padding: tokens.spacing.small,
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
  totalXp: number;
};

function XpIndicator({ totalXp }: XpIndicatorProps): JSX.Element {
  const formattedTotalXp = new Intl.NumberFormat().format(totalXp);

  return (
    <div css={wrapperStyle}>
      <Badge color={tokens.colors.purple} css={badgeStyle} size="large">
        {`${formattedTotalXp} XP`}
      </Badge>
    </div>
  );
}

export default XpIndicator;
