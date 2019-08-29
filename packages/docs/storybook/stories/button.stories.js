import './styles.css';

import Button from '@datacamp/waffles-button';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-button', module).add('Button Component', () => (
  <table>
    <tr>
      <td>
        <Button appearance="primary" size="small">
          small
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="danger" size="small">
          small
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="success" size="small">
          small
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="warning" size="small">
          small
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        {' '}
        <Button appearance="primary">Default</Button>
      </td>
      <td>
        {' '}
        <Button appearance="primary" intent="danger">
          Danger
        </Button>
      </td>
      <td>
        {' '}
        <Button appearance="primary" className="test" intent="success">
          Success
        </Button>
      </td>
      <td>
        {' '}
        <Button appearance="primary" intent="warning">
          Warning
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="primary" size="large">
          large{' '}
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="danger" size="large">
          large
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="success" size="large">
          large
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="warning" size="large">
          large
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="default" size="small">
          outline small
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="danger" size="small">
          outline danger small
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="success" size="small">
          outline success small
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="warning" size="small">
          outline warning small
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="default">outline</Button>
      </td>
      <td>
        <Button appearance="default" intent="danger">
          outline danger
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="success">
          outline success
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="warning">
          outline warning
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="default" size="large">
          outline large
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="danger" size="large">
          outline danger large
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="success" size="large">
          outline success large
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="warning" size="large">
          outline warning large
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button disabled>Disabled</Button>
      </td>
      <td>
        <Button intent="danger" disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button intent="success" disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button intent="warning" disabled>
          Disabled
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="primary" disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="danger" disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="success" disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="warning" disabled>
          Disabled
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button isLoading>isLoading</Button>
      </td>
      <td>
        <Button intent="danger" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button intent="success" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button intent="warning" isLoading>
          isLoading
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="primary" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="danger" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="success" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="warning" isLoading>
          isLoading
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button size="large" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button intent="danger" size="large" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button intent="success" size="large" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button intent="warning" size="large" isLoading>
          isLoading
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button size="small" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button intent="danger" size="small" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button intent="success" size="small" isLoading>
          isLoading
        </Button>
      </td>
      <td>
        <Button intent="warning" size="small" isLoading>
          isLoading
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button isLoading>test different sizes</Button>
      </td>
      <td>
        <Button intent="danger" isLoading>
          test different sizes
        </Button>
      </td>
      <td>
        <Button intent="success" size="large" isLoading>
          test different sizes
        </Button>
      </td>
      <td>
        <Button intent="warning" size="small" isLoading>
          test different sizes
        </Button>
      </td>
    </tr>
  </table>
));
