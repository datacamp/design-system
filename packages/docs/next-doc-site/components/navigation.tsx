import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import Category from './navigation-category';
import Item from './navigation-item';

const navStyle = css`
  flex-grow: 1;
`;

const listStyle = css`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${tokens.colors.navy};
`;

function Navigation(): JSX.Element {
  return (
    <nav css={navStyle}>
      <ul css={listStyle}>
        <Item href="/" label="Introduction" />
        <Category label="Design">
          <Item href="/design/colors" label="Colors" />
          <Item href="/design/icons" label="Icons" />
          <Item href="/design/logo" label="Logo" />
          <Item href="/design/typography" label="Typography" />
        </Category>
        <Category label="Content">
          <Item href="/content/grammar" label="Grammar" />
          <Item href="/content/terminology" label="Terminology" />
          <Item href="/content/course-naming" label="Course Naming" />
        </Category>
        <Category label="Components">
          <Item href="/components/introduction" label="Introduction" />
          <Item href="/components/tokens" label="Tokens" />
          <Item href="/components/assets" label="Assets" />
          <Item href="/components/button" label="Button" />
          <Item href="/components/card" label="Card" />
          <Item href="/components/form-elements" label="Form Elements" />
          <Item href="/components/loaders" label="Loaders" />
          <Item href="/components/markdown" label="Markdown" />
          <Item href="/components/modals" label="Modals" />
          <Item href="/components/positioner" label="Positioner" />
          <Item
            href="/components/resizable-elements"
            label="Resizable Elements"
          />
          <Item href="/components/text" label="Text" />
          <Item href="/components/toast" label="Toast" />
          <Item href="/components/tooltip" label="Tooltip" />
        </Category>
      </ul>
    </nav>
  );
}

export default Navigation;
