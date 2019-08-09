import * as components from '.';
import CodeBlock from './components/CodeBlock';
import Emphasis from './components/Emphasis';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Small from './components/Small';
import Strong from './components/Strong';
import Text from './components/Text';

describe('index', () => {
  it('exports all the components', () => {
    expect(components).toEqual({
      CodeBlock,
      Emphasis,
      Heading,
      Paragraph,
      Small,
      Strong,
      Text,
    });
  });
});
