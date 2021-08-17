import { Switch } from '@datacamp/waffles-form-elements';
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
    <form css={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 240 }}>
      <Switch
        checked={settings.bluetooth}
        fullWidth
        name="bluetooth"
        onChange={handleChange}
      >
        Bluetooth
      </Switch>
      <Switch
        checked={settings.wifi}
        fullWidth
        name="wifi"
        onChange={handleChange}
      >
        Wi-Fi
      </Switch>
      <Switch
        checked={settings.airplane}
        disabled
        fullWidth
        name="airplane"
        onChange={handleChange}
      >
        Airplane mode
      </Switch>
    </form>
  );
}

export default Example;
