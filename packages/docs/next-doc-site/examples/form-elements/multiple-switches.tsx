import { Switch } from '@datacamp/waffles-form-elements';
import tokens from '@datacamp/waffles-tokens';
import { FormEvent, useState } from 'react';

type ExampleState = {
  [key: string]: boolean;
};

function Example(): JSX.Element {
  const [settings, setSettings] = useState<ExampleState>({
    airplane: true,
    bluetooth: false,
    wifi: false,
  });

  function handleChange(event: FormEvent<HTMLInputElement>): void {
    const { name } = event.target as HTMLInputElement;

    const newSettings = {
      ...settings,
      [name]: !settings[name],
    };

    setSettings(newSettings);
  }

  return (
    <form css={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      <Switch
        appearance="inverted"
        checked={settings.bluetooth}
        css={{
          backgroundColor: tokens.colors.navy,
          borderRadius: tokens.borderRadius.medium,
          padding: 8,
        }}
        name="bluetooth"
        onChange={handleChange}
      >
        Bluetooth
      </Switch>
      <Switch checked={settings.wifi} name="wifi" onChange={handleChange}>
        Wi-Fi
      </Switch>
      <Switch
        checked={settings.airplane}
        disabled
        name="airplane"
        onChange={handleChange}
      >
        Airplane mode
      </Switch>
    </form>
  );
}

export default Example;
