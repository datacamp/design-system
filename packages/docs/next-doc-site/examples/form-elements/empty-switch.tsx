import { Switch } from '@datacamp/waffles-form-elements';
import { useState } from 'react';

function Example(): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      aria-label="Dark mode"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
}

export default Example;
