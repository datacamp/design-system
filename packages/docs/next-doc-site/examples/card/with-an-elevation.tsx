import Card from '@datacamp/waffles-card';
import { Heading, Paragraph } from '@datacamp/waffles-text';

function Example(): JSX.Element {
  return (
    <Card css={{ padding: 24 }} elevation={2} hoverElevation={4}>
      <Heading as="h4" size={400}>
        A Card with Mouse Over Elevation
      </Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et felis
        at ex hendrerit euismod. Aenean ut eros nisl. Etiam maximus augue ut
        velit fermentum, id aliquam elit tempor.
      </Paragraph>
    </Card>
  );
}

export default Example;
