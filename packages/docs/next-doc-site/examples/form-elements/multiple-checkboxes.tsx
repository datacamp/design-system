// eslint-disable-next-line filenames/match-exported
import { Checkbox, CheckboxList } from '@datacamp/waffles-form-elements';
import { useState } from 'react';

function Example(): JSX.Element {
  const [featureWishlist, setFeatureWishlist] = useState<string[]>([]);

  return (
    <form>
      <CheckboxList
        label="What features should Waffles have?"
        name="feature-wishlist"
        onChange={setFeatureWishlist}
        value={featureWishlist}
      >
        <Checkbox value="basic">Basic features</Checkbox>
        <Checkbox value="wrap">
          Wrapping text when the option takes quite a few words to clearly
          explain
        </Checkbox>
        <Checkbox disabled value="all">
          All features
        </Checkbox>
      </CheckboxList>
    </form>
  );
}

export default Example;
