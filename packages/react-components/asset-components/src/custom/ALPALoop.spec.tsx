import axeRender from '@datacamp/waffles-axe-render';

import ALPALoop, { Highlight, loopComponents } from './ALPALoop';

describe('<ALPALoop />', () => {
  (Object.keys(loopComponents) as Highlight[]).forEach((highlight) => {
    it(`renders a ${highlight} logo`, async () => {
      const { container } = await axeRender(<ALPALoop highlight={highlight} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
