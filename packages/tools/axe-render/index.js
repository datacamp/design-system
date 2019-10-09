import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const axeRender = async (ui, options) => {
  const renderResult = render(ui, options);
  const html = await axe(document.body.innerHTML);
  expect(html).toHaveNoViolations();
  return renderResult;
};

export default axeRender;
