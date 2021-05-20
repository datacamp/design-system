import Markdown from '@datacamp/waffles-markdown';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import Markdown from '@datacamp/waffles-markdown';

function Playground(): JSX.Element {
  return (
    <Markdown
      source={\`
### Example heading
This is some content
  \`}
    />
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Markdown,
  },
};

export default playgroundConfig;
