import Card from '@datacamp/waffles-card';
import { css } from '@emotion/react';

import { MAX_CONTENT_WIDTH } from './constants';

const sectionStyle = css`
  padding: 16px 32px 0 32px;
  max-width: ${MAX_CONTENT_WIDTH}px;

  &:first-of-type {
    padding-top: 32px;
  }

  &:last-of-type {
    padding-bottom: 32px;
  }
`;

const cardStyle = css`
  padding: 16px;
`;

type PageSectionProps = {
  children: React.ReactNode;
};

function PageSection({ children }: PageSectionProps): JSX.Element {
  return (
    <section css={sectionStyle}>
      <Card css={cardStyle} elevation={2}>
        {children}
      </Card>
    </section>
  );
}

export default PageSection;
