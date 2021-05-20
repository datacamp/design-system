import { Input, Radio, RadioList } from '@datacamp/waffles-form-elements';
import { useState } from 'react';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import { Input, Radio, RadioList } from '@datacamp/waffles-form-elements';
import { useState } from 'react';

function Playground(): JSX.Element {
  const [name, setName] = useState('');
  const [loveLevel, setLoveLevel] = useState('');

  return (
    <form>
      <Input
        label="Full name"
        name="name"
        onChange={setName}
        placeholder="Taylor Swift"
        value={name}
      />
      <RadioList
        name="love-level"
        label="I love waffles components as much as"
        value={loveLevel}
        onChange={setLoveLevel}
      >
        <Radio value="parents">my parents</Radio>
        <Radio value="siblings">my siblings</Radio>
        <Radio value="children">my children</Radio>
      </RadioList>
    </form>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Input,
    Radio,
    RadioList,
    useState,
  },
};

export default playgroundConfig;
