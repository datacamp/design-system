import ResizableElements from '@datacamp/waffles-resizable-elements';
import { Paragraph } from '@datacamp/waffles-text';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import ResizableElements from '@datacamp/waffles-resizable-elements';
import { Paragraph } from '@datacamp/waffles-text';

function Playground(): JSX.Element {
  return (
    <ResizableElements orientation="row">
      <Paragraph>
        This is a whole lot of text in a box that can be resized.
      </Paragraph>
      <Paragraph>
        This is a whole lot of text in a box that can be resized.
      </Paragraph>
      <Paragraph>
        This is a whole lot of text in a box that can be resized.
      </Paragraph>
    </ResizableElements>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Paragraph,
    ResizableElements,
  },
};

export default playgroundConfig;
