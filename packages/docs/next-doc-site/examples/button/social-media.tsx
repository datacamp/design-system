import {
  ButtonGroup,
  FacebookButton,
  GoogleButton,
  LinkedinButton,
  TwitterButton,
} from '@datacamp/waffles-button';

function Example(): JSX.Element {
  return (
    <ButtonGroup>
      <FacebookButton />
      <GoogleButton />
      <LinkedinButton />
      <TwitterButton />
    </ButtonGroup>
  );
}

export default Example;
