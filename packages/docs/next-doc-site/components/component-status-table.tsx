import { css } from '@emotion/react';

import ComponentStatus from './component-status';
import Table from './table';

const cellStyle = css`
  text-align: right;
`;

function ComponentStatusTable(): JSX.Element {
  return (
    <Table>
      <thead>
        <tr>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell css={cellStyle}>Status</Table.HeadCell>
        </tr>
      </thead>
      <tbody>
        <ComponentStatus component="Tag" path="tag" variant="available" />
        <ComponentStatus component="Icon" path="icons" variant="available" />
        <ComponentStatus component="Text" path="text" variant="available" />
        <ComponentStatus component="Card" path="card" variant="available" />
        <ComponentStatus component="Button" path="button" variant="available" />
        <ComponentStatus component="Modals" path="modals" variant="available" />
        <ComponentStatus
          component="Form Elements"
          path="form-elements"
          variant="available"
        />
        <ComponentStatus
          component="Tooltips"
          path="tooltips"
          variant="available"
        />
        <ComponentStatus component="Toast" path="toast" variant="available" />
        <ComponentStatus
          component="Badge &amp; Pill"
          path="text"
          variant="available"
        />
        <ComponentStatus component="Link" path="text" variant="available" />
        <ComponentStatus
          component="Resizable Elements"
          path="resizable-elements"
          variant="available"
        />
        <ComponentStatus component="Assets" path="assets" variant="available" />
        <ComponentStatus component="Checkbox" path="" variant="planned" />
        <ComponentStatus component="Switch" path="" variant="planned" />
        <ComponentStatus component="Progress Bar" path="" variant="planned" />
        <ComponentStatus component="Avatars" path="" variant="planned" />
        <ComponentStatus component="Navigation" path="" variant="considered" />
        <ComponentStatus component="Code Editor" path="" variant="considered" />
        <ComponentStatus
          component="Dropdown Menu"
          path=""
          variant="considered"
        />
        <ComponentStatus
          component="Fluid Stack Layout"
          path=""
          variant="considered"
        />
        <ComponentStatus
          component="Collapsing Sections"
          path=""
          variant="considered"
        />
        <ComponentStatus
          component="Key Value List"
          path=""
          variant="considered"
        />
        <ComponentStatus
          component="Autocomplete"
          path=""
          variant="considered"
        />
        <ComponentStatus component="Charts" path="" variant="considered" />
        <ComponentStatus component="Tabs" path="" variant="considered" />
      </tbody>
    </Table>
  );
}

export default ComponentStatusTable;
