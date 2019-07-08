import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const axeRender = (ui, options) => {
  const renderResult = render(ui, options);
  return axe(renderResult.container.innerHTML).then(html => {
    expect(html).toHaveNoViolations();
    return renderResult;
  });
};

export default axeRender;
