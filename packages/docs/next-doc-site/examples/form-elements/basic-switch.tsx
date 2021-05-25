import { Switch } from '@datacamp/waffles-form-elements';
import { useState } from 'react';

function Example(): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)}>
      Dark mode
    </Switch>
  );
}

export default Example;
