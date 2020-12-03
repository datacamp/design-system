import calculateSizes from './calculateSizes';

describe('calculateSizes', () => {
  it('it corrects the uncollapsed sizes to account for the splitter', () => {
    expect(calculateSizes([20, 30, 40, 10], false, false, 20)).toEqual([
      'calc(20% + -3.75px)',
      'calc(30% + -3.75px)',
      'calc(40% + -3.75px)',
      'calc(10% + -3.75px)',
    ]);
  });

  it('it handles a collapsed first element', () => {
    expect(calculateSizes([20, 30, 40, 10], true, false, 20)).toEqual([
      '16.25px',
      'calc(50% + -23.75px)',
      'calc(40% + -3.75px)',
      'calc(10% + -3.75px)',
    ]);
  });

  it('it handles a collapsed last element', () => {
    expect(calculateSizes([20, 30, 40, 10], false, true, 20)).toEqual([
      'calc(20% + -3.75px)',
      'calc(30% + -3.75px)',
      'calc(50% + -23.75px)',
      '16.25px',
    ]);
  });
});
