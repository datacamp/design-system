// eslint-disable-next-line filenames/match-exported
import Button from '@datacamp/waffles-button';
import { AlertDialog } from '@datacamp/waffles-modals';
import { Fragment, useState } from 'react';

function Example(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => setIsOpen(true)}>open alert</Button>
      <AlertDialog
        cancelButtonText="Cancel"
        confirmButtonText="Delete"
        description="Are you sure you want to proceed with this action, this can not be undone."
        intent="danger"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
        title="You are about to delete an exercise"
      />
    </Fragment>
  );
}

export default Example;
