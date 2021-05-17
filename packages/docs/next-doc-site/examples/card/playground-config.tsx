// eslint-disable-next-line filenames/match-exported
import Card from '@datacamp/waffles-card';
import { Heading, Paragraph } from '@datacamp/waffles-text';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import Card from '@datacamp/waffles-card';
import { Heading, Paragraph } from '@datacamp/waffles-text';

function Playground(): JSX.Element {
  return (
    <Card elevation={0}>
      <div style={{ padding: 24 }}>
        <Heading as="h4" size={400}>
          A Card
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et felis
          at ex hendrerit euismod. Aenean ut eros nisl. Etiam maximus augue ut
          velit fermentum, id aliquam elit tempor. Aenean commodo, urna et posuere
          auctor, neque justo scelerisque quam, quis ullamcorper ex ligula sed
          odio. Suspendisse at eros ante.
        </Paragraph>
      </div>
    </Card>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Card,
    Heading,
    Paragraph,
  },
};

export default playgroundConfig;
