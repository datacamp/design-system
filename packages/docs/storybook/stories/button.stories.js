import './styles.css';

import Button, {
  ButtonGroup,
  CompactButtonGroup,
} from '@datacamp/waffles-button';
import { AddCircleIcon, ChevronDownIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

const intents = ['neutral', 'warning', 'danger', 'success', 'b2b'];

const AllButtonCombos = ({ children }) => (
  <div
    css={{
      backgroundColor: tokens.color.neutral.beige400.value.hex,
      display: 'flex',
      div: { marginBottom: 10 },
      flexDirection: 'column',
    }}
  >
    {['default', 'primary', 'inverted'].map(appearance =>
      ['small', 'medium', 'large'].map(size => (
        <ButtonGroup key={`${appearance}${size}`}>
          {[null, 'loading', 'disabled'].map(state => {
            return intents.map(intent =>
              children({
                appearance,
                intent,
                key: `${appearance}${intent}${size}${state}`,
                size,
                state,
              }),
            );
          })}
        </ButtonGroup>
      )),
    )}
  </div>
);

const getTooltipPosition = () =>
  select(
    'tooltipPosition',
    [
      'bottom',
      'top',
      'left',
      'right',
      'bottomLeft',
      'bottomRight',
      'topLeft',
      'topRight',
    ],
    'bottom',
  );

const getTooltipAppearance = () =>
  select('tooltipAppearance', ['dark', 'light'], 'dark');

storiesOf('waffles-button', module)
  .addParameters({ percy: { widths: [1500] } })
  .add('Button with text', () => (
    <AllButtonCombos>
      {({ appearance, state, intent, size, key }) => (
        <Button
          appearance={appearance}
          disabled={state === 'disabled'}
          intent={intent}
          key={key}
          loading={state === 'loading'}
          size={size}
          tooltipAppearance={getTooltipAppearance()}
          tooltipPosition={getTooltipPosition()}
          tooltipText="very long tooltip text"
        >
          Button
        </Button>
      )}
    </AllButtonCombos>
  ))

  .add('Button with icon', () => (
    <AllButtonCombos>
      {({ appearance, state, intent, size, key }) => (
        <Button
          appearance={appearance}
          ariaLabel="plus button"
          disabled={state === 'disabled'}
          intent={intent}
          key={key}
          loading={state === 'loading'}
          size={size}
          tooltipAppearance={getTooltipAppearance()}
          tooltipPosition={getTooltipPosition()}
          tooltipText="very long tooltip text"
        >
          <AddCircleIcon />
        </Button>
      )}
    </AllButtonCombos>
  ))
  .add('Button with icon and text', () => (
    <>
      <AllButtonCombos>
        {({ appearance, state, intent, size, key }) => (
          <Button
            appearance={appearance}
            disabled={state === 'disabled'}
            intent={intent}
            key={key}
            loading={state === 'loading'}
            size={size}
            tooltipAppearance={getTooltipAppearance()}
            tooltipPosition={getTooltipPosition()}
            tooltipText="very long tooltip text"
          >
            <AddCircleIcon /> Add
          </Button>
        )}
      </AllButtonCombos>
      <AllButtonCombos>
        {({ appearance, state, intent, size, key }) => (
          <Button
            appearance={appearance}
            disabled={state === 'disabled'}
            intent={intent}
            key={key}
            loading={state === 'loading'}
            size={size}
            tooltipAppearance={getTooltipAppearance()}
            tooltipPosition={getTooltipPosition()}
            tooltipText="very long tooltip text"
          >
            Add <AddCircleIcon />
          </Button>
        )}
      </AllButtonCombos>
    </>
  ))
  .add('compact ButtonGroup', () => (
    <div
      css={{
        display: 'flex',
        div: { marginBottom: 10 },
        flexDirection: 'column',
      }}
    >
      {['neutral', 'warning', 'danger', 'success', 'b2b'].map(intent => (
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
          <Button appearance="primary" ariaLabel="See more" intent={intent}>
            <ChevronDownIcon />
          </Button>
        </CompactButtonGroup>
      ))}
      {['neutral', 'warning', 'danger', 'success', 'b2b'].map(intent => (
        <CompactButtonGroup key={intent}>
          <Button intent={intent}>Button 1</Button>
          <Button intent={intent}>Button 2</Button>
          <Button intent={intent}>
            <AddCircleIcon /> with icon
          </Button>
          <Button ariaLabel="See more" intent={intent}>
            <ChevronDownIcon />
          </Button>
        </CompactButtonGroup>
      ))}
    </div>
  ))
  .add('nested ButtonGroup', () => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <CompactButtonGroup>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </CompactButtonGroup>
    </ButtonGroup>
  ));
