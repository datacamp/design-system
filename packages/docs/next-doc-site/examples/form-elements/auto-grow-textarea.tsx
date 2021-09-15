import { TextArea } from '@datacamp/waffles-form-elements';
import { useState } from 'react';

function Example(): JSX.Element {
  const [message, setMessage] = useState('');

  return (
    <form>
      <TextArea
        autoGrow
        label="Send a message"
        name="longMessage"
        onChange={setMessage}
        placeholder="How are you?"
        value={message}
      />
    </form>
  );
}

export default Example;
