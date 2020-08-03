import AlternateCode from './alternateComponents/AlternateCode';
import AlternateCodeBlock from './alternateComponents/AlternateCodeBlock';
import AlternateHeading from './alternateComponents/AlternateHeading';
import AlternateListItem from './alternateComponents/AlternateListItem';
import PlainString from './alternateComponents/PlainString';
import Badge from './components/Badge';
import Code from './components/Code';
import CodeBlock from './components/CodeBlock';
import Emphasis from './components/Emphasis';
import GlobalFontFaces from './components/GlobalFontFaces';
import Heading from './components/Heading';
import Link from './components/Link';
import List from './components/List';
import Paragraph from './components/Paragraph';
import Small from './components/Small';
import Strong from './components/Strong';
import Text from './components/Text';

import * as components from '.';

describe('index', () => {
  it('exports all the components', () => {
    expect(components).toEqual({
      alternateComponents: {
        AlternateCode,
        AlternateCodeBlock,
        AlternateHeading,
        AlternateListItem,
        PlainString,
      },
      Badge,
      Code,
      CodeBlock,
      Emphasis,
      GlobalFontFaces,
      Heading,
      Link,
      List,
      Paragraph,
      Small,
      Strong,
      Text,
    });
  });
});
