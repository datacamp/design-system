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
          component="Tooltip"
          path="tooltip"
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
        <ComponentStatus
          component="Checkbox"
          path="form-elements"
          variant="available"
        />
        <ComponentStatus
          component="Switch"
          path="form-elements"
          variant="available"
        />
        <ComponentStatus
          component="User Profile Menu"
          path="button"
          variant="available"
        />
        <ComponentStatus component="Progress Bar" variant="planned" />
        <ComponentStatus component="Avatars" variant="planned" />
        <ComponentStatus component="Navigation" variant="considered" />
        <ComponentStatus component="Code Editor" variant="considered" />
        <ComponentStatus component="Dropdown Menu" variant="considered" />
        <ComponentStatus component="Fluid Stack Layout" variant="considered" />
        <ComponentStatus component="Collapsing Sections" variant="considered" />
        <ComponentStatus component="Key Value List" variant="considered" />
        <ComponentStatus component="Autocomplete" variant="considered" />
        <ComponentStatus component="Charts" variant="considered" />
        <ComponentStatus component="Tabs" variant="considered" />
      </tbody>
    </Table>
  );
}

export default ComponentStatusTable;
