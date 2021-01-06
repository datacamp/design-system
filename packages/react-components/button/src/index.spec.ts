import Button from './Button';
import ButtonGroup from './ButtonGroup';
import CloseButton from './CloseButton';
import CompactButtonGroup from './CompactButtonGroup';
import {
  FacebookButton,
  GoogleButton,
  LinkedinButton,
  TwitterButton,
} from './SocialMediaButtons';

import * as moduleExports from '.';

describe('package index', () => {
  it('exports everything', () => {
    expect(moduleExports).toEqual({
      ButtonGroup,
      CloseButton,
      CompactButtonGroup,
      default: Button,
      FacebookButton,
      GoogleButton,
      LinkedinButton,
      TwitterButton,
    });
  });
});
