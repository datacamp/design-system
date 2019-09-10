import './styles.css';

import Button from '@datacamp/waffles-button';
import { AddCircleIcon } from '@datacamp/waffles-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-button', module).add('Button Component', () => (
  <table>
    <tr>
      <td>
        <Button appearance="primary">
          <AddCircleIcon />
          Add
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="danger">
          Add
          <AddCircleIcon />
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="success" size="large">
          <AddCircleIcon />
          Add
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="danger" size="small">
          Add
          <AddCircleIcon />
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="primary" intent="danger" isLoading>
          Add
          <AddCircleIcon />
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="success" disabled>
          <AddCircleIcon />
          Add
        </Button>
      </td>
    </tr>
  </table>
));
