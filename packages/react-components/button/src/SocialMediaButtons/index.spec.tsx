import '@testing-library/jest-dom/extend-expect';

import axeRender from '@datacamp/waffles-axe-render';
import React from 'react';

import { FacebookButton, GoogleButton, LinkedinButton, TwitterButton } from '.';

jest.mock('react-uid', () => ({ useUIDSeed: () => () => 'mock-id' }));

describe('Social Media Buttons', () => {
  [
    ['facebook', FacebookButton],
    ['google', GoogleButton],
    ['linked in', LinkedinButton],
    ['twitter', TwitterButton],
  ].forEach(([name, Button]) => {
    it(`renders ${name} button`, async () => {
      const { container } = await axeRender(<Button />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
