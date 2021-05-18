import {
  ButtonGroup,
  FacebookButton,
  LinkedinButton,
} from '@datacamp/waffles-button';

function Example(): JSX.Element {
  return (
    <ButtonGroup>
      <FacebookButton />
      <LinkedinButton />
    </ButtonGroup>
  );
}

export default Example;
