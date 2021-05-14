// eslint-disable-next-line filenames/match-exported
import tokens from '@datacamp/waffles-tokens';

import Markdown from './markdown-elements';

function FormattedTokens(): JSX.Element {
  return <Markdown.code>{JSON.stringify(tokens, null, 2)}</Markdown.code>;
}

export default FormattedTokens;
