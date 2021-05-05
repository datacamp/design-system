// eslint-disable-next-line filenames/match-exported
import { Emphasis, Link, Paragraph, Strong } from '@datacamp/waffles-text';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import { Emphasis, Link, Paragraph, Strong } from '@waffles/text';

function Playground(): JSX.Element {
  return (
    <Paragraph>
      This is some text with <Link href="https://datacamp.com">a link</Link>.
      Some parts of it are <Strong>bold</Strong> and some are{' '}
      <Emphasis>emphasised</Emphasis>.
    </Paragraph>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Emphasis,
    Link,
    Paragraph,
    Strong,
  },
};

export default playgroundConfig;
