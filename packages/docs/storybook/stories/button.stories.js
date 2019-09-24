import './styles.css';

import Button, {
  ButtonGroup,
  CompactButtonGroup,
} from '@datacamp/waffles-button';
import { AddCircleIcon, ChevronDownIcon } from '@datacamp/waffles-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-button', module)
  .add('Button Component', () => (
    <>
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
          <td>
            <Button
              appearance="primary"
              intent="cta"
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
          <td>
            <Button appearance="primary" intent="cta" onClick={() => {}}>
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
          <td>
            <Button
              appearance="primary"
              intent="cta"
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
          <td>
            <Button
              appearance="primary"
              intent="cta"
              onClick={() => {}}
              disabled
            >
              Disabled
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button loading>isLoading</Button>
          </td>
          <td>
            <Button intent="danger" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button intent="success" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button intent="warning" loading>
              isLoading
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button appearance="primary" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="danger" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="success" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="warning" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="cta" loading>
              isLoading
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button size="large" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button intent="danger" size="large" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button intent="success" size="large" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button intent="warning" size="large" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="cta" size="large" loading>
              isLoading
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button size="small" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button intent="danger" size="small" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button intent="success" size="small" loading>
              isLoading
            </Button>
          </td>
          <td>
            <Button intent="warning" size="small" loading>
              isLoading
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button loading>test different sizes</Button>
          </td>
          <td>
            <Button intent="danger" loading>
              test different sizes
            </Button>
          </td>
          <td>
            <Button intent="success" size="large" loading>
              test different sizes
            </Button>
          </td>
          <td>
            <Button intent="warning" size="small" loading>
              test different sizes
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="cta" size="small" loading>
              test different sizes
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              appearance="primary"
              href="https://www.google.com/"
              type="link"
            >
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
          <td>
            <Button
              appearance="primary"
              href="https://www.google.com/?"
              intent="cta"
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
    </>
  ))

  .add('Button with icon', () => (
    <>
      <table>
        <tr>
          <td>
            <Button size="small">
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button size="large">
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="cta">
              <AddCircleIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button intent="danger" size="small">
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button aria-label="add" intent="warning" size="large">
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button intent="success">
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button>
              <AddCircleIcon appearance="primary" disabled />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button intent="danger" disabled>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button intent="warning" disabled>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button intent="success" disabled>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button disabled>
              <AddCircleIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button appearance="primary" intent="danger" disabled>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="warning" disabled>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="success" disabled>
              <AddCircleIcon />
            </Button>
          </td>

          <td>
            <Button appearance="primary" disabled>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="cta" disabled>
              <AddCircleIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button appearance="primary" intent="danger" loading>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="warning" loading>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="success" loading>
              <AddCircleIcon />
            </Button>
          </td>

          <td>
            <Button appearance="primary" loading>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="cta" loading>
              <AddCircleIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button intent="danger" loading>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button intent="warning" loading>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button intent="success" loading>
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button loading>
              <AddCircleIcon />
            </Button>
          </td>
        </tr>
      </table>
    </>
  ))

  .add('Button with icon and text', () => (
    <>
      <table>
        <tr>
          <td>
            <Button>
              <AddCircleIcon />
              Add
            </Button>
          </td>
          <td>
            <Button intent="danger">
              Add
              <AddCircleIcon />
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="warning">
              <AddCircleIcon />
              Add
            </Button>
          </td>
          <td>
            <Button appearance="primary" intent="cta">
              Add
              <AddCircleIcon />
            </Button>
          </td>
        </tr>
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
            <Button appearance="primary" intent="cta" size="small">
              Add
              <AddCircleIcon />
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button appearance="primary" intent="danger" loading>
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
          <td>
            <Button appearance="primary" intent="cta" disabled>
              <AddCircleIcon />
              Add
            </Button>
          </td>
        </tr>
      </table>
    </>
  ))
  .add('ButtonGroup', () => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button appearance="primary" intent="success">
        <AddCircleIcon />
        Button 3
      </Button>
      <Button appearance="primary" intent="danger">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  ))
  .add('compact ButtonGroup', () => (
    <div
      css={{
        display: 'flex',
        div: { marginBottom: 10 },
        flexDirection: 'column',
      }}
    >
      {['neutral', 'warning', 'danger', 'success', 'cta'].map(intent => (
        <CompactButtonGroup key={intent}>
          <Button appearance="primary" intent={intent}>
            Button 1
          </Button>
          <Button appearance="primary" intent={intent}>
            Button 2
          </Button>
          <Button appearance="primary" intent={intent}>
            <AddCircleIcon /> with icon
          </Button>
          <Button appearance="primary" intent={intent}>
            <ChevronDownIcon />
          </Button>
        </CompactButtonGroup>
      ))}
      {['neutral', 'warning', 'danger', 'success'].map(intent => (
        <CompactButtonGroup key={intent}>
          <Button intent={intent}>Button 1</Button>
          <Button intent={intent}>Button 2</Button>
          <Button intent={intent}>
            <AddCircleIcon /> with icon
          </Button>
          <Button intent={intent}>
            <ChevronDownIcon />
          </Button>
        </CompactButtonGroup>
      ))}
    </div>
  ));
