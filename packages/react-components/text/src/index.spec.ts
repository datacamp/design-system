import Paragraph from './components/Paragraph';
import Strong from './components/Strong';
import Text from './components/Text';
import * as components from '.';

describe('index', () => {
  it('exports all the components', () => {
    expect(components).toEqual({ Paragraph, Strong, Text });
  });
});
