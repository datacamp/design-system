// eslint-disable-next-line filenames/match-exported
import { Select, SelectOption } from '@datacamp/waffles-form-elements';
import { useState } from 'react';

function Example(): JSX.Element {
  const [favorites, setFavorites] = useState('');

  return (
    <form>
      <Select
        description="Select your favorite from the available options."
        label="Favorite form element"
        name="fave-component"
        onChange={setFavorites}
        value={favorites}
      >
        <SelectOption value="input">Input</SelectOption>
        <SelectOption value="radio-list">RadioList</SelectOption>
        <SelectOption value="select">Select</SelectOption>
      </Select>
    </form>
  );
}

export default Example;
