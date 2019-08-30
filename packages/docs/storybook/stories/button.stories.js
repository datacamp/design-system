import './styles.css';

import Button from '@datacamp/waffles-button';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-button', module).add('Button Component', () => (
  <table>
    <tr>
      <td>
        <Button appearance="primary" onClick={() => {}} size="small">
          small
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="danger"
          onClick={() => {}}
          size="small"
        >
          small
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="success"
          onClick={() => {}}
          size="small"
        >
          small
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="warning"
          onClick={() => {}}
          size="small"
        >
          small
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="primary" onClick={() => {}}>
          Default
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="danger" onClick={() => {}}>
          Danger
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          className="test"
          intent="success"
          onClick={() => {}}
        >
          Success
        </Button>
      </td>
      <td>
        <Button appearance="primary" intent="warning" onClick={() => {}}>
          Warning
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="primary" onClick={() => {}} size="large">
          Large
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="danger"
          onClick={() => {}}
          size="large"
        >
          large
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="success"
          onClick={() => {}}
          size="large"
        >
          large
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="warning"
          onClick={() => {}}
          size="large"
        >
          large
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="default" onClick={() => {}} size="small">
          outline small
        </Button>
      </td>
      <td>
        <Button
          appearance="default"
          intent="danger"
          onClick={() => {}}
          size="small"
        >
          outline danger small
        </Button>
      </td>
      <td>
        <Button
          appearance="default"
          intent="success"
          onClick={() => {}}
          size="small"
        >
          outline success small
        </Button>
      </td>
      <td>
        <Button
          appearance="default"
          intent="warning"
          onClick={() => {}}
          size="small"
        >
          outline warning small
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="default" onClick={() => {}}>
          outline
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="danger" onClick={() => {}}>
          outline danger
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="success" onClick={() => {}}>
          outline success
        </Button>
      </td>
      <td>
        <Button appearance="default" intent="warning" onClick={() => {}}>
          outline warning
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="default" onClick={() => {}} size="large">
          outline large
        </Button>
      </td>
      <td>
        <Button
          appearance="default"
          intent="danger"
          onClick={() => {}}
          size="large"
        >
          outline danger large
        </Button>
      </td>
      <td>
        <Button
          appearance="default"
          intent="success"
          onClick={() => {}}
          size="large"
        >
          outline success large
        </Button>
      </td>
      <td>
        <Button
          appearance="default"
          intent="warning"
          onClick={() => {}}
          size="large"
        >
          outline warning large
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button onClick={() => {}} disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button intent="danger" onClick={() => {}} disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button intent="success" onClick={() => {}} disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button intent="warning" onClick={() => {}} disabled>
          Disabled
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button appearance="primary" onClick={() => {}} disabled>
          Disabled
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="danger"
          onClick={() => {}}
          disabled
        >
          Disabled
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="success"
          onClick={() => {}}
          disabled
        >
          Disabled
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          intent="warning"
          onClick={() => {}}
          disabled
        >
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
    <tr>
      <td>
        <Button appearance="primary" href="https://www.google.com/" type="link">
          Link
        </Button>
      </td>
      <td>
        <Button
          appearance="primary"
          href="https://www.google.com/"
          intent="danger"
          target="_blank"
          type="link"
        >
          Link target blank
        </Button>
      </td>
      <td>
        <Button
          href="https://www.google.com/"
          intent="warning"
          size="small"
          target="_blank"
          type="link"
        >
          Link small target blank
        </Button>
      </td>
      <td>
        <Button
          href="https://www.google.com/?"
          intent="success"
          size="large"
          type="link"
        >
          Link Large
        </Button>
      </td>
    </tr>
    <tr>
      <td>
        <Button type="submit">submit</Button>
      </td>
      <td>
        <Button appearance="primary" intent="danger" type="submit">
          submit
        </Button>
      </td>
      <td>
        <Button intent="warning" size="small" type="submit">
          submit small
        </Button>
      </td>
      <td>
        <Button intent="success" size="large" type="submit">
          submit Large
        </Button>
      </td>
    </tr>
  </table>
));
