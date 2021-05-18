import { TextArea } from '@datacamp/waffles-form-elements';
import { useState } from 'react';

function Example(): JSX.Element {
  const [description, setDescription] = useState('');

  return (
    <form>
      <TextArea
        description="Describe how using waffles components makes you feel."
        label="Feelings"
        name="description"
        onChange={setDescription}
        placeholder="I get all these warm fuzzy feelings..."
        rows={6}
        value={description}
      />
    </form>
  );
}

export default Example;
