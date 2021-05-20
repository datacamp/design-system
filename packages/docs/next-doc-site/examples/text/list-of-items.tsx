import { Heading, List } from '@datacamp/waffles-text';
import { Fragment } from 'react';

function Example(): JSX.Element {
  return (
    <Fragment>
      <Heading as="h4" size={300}>
        Fruits
      </Heading>
      <List ordered>
        <List.Item>apples</List.Item>
        <List.Item>oranges</List.Item>
        <List.Item>bananas</List.Item>
      </List>
    </Fragment>
  );
}

export default Example;
