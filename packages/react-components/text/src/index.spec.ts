import * as components from '.';
import AlternateCode from './alternateComponents/AlternateCode';
import AlternateCodeBlock from './alternateComponents/AlternateCodeBlock';
import AlternateHeading from './alternateComponents/AlternateHeading';
import PlainString from './alternateComponents/PlainString';
import Badge from './components/Badge';
import BetaBadge from './components/BetaBadge';
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

describe('index', () => {
  it('exports all the components', () => {
    expect(components).toEqual({
      Badge,
      BetaBadge,
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
      alternateComponents: {
        AlternateCode,
        AlternateCodeBlock,
        AlternateHeading,
        PlainString,
      },
    });
  });
});
