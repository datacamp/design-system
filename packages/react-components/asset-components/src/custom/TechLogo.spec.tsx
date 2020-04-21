import axeRender from '@datacamp/waffles-axe-render';

import TechLogo, { logoComponents, Technology } from './TechLogo';

describe('<TechLogo />', () => {
  (Object.keys(logoComponents) as Technology[]).forEach(technology => {
    it(`renders a ${technology} logo`, async () => {
      const { container } = await axeRender(
        <TechLogo technology={technology} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
