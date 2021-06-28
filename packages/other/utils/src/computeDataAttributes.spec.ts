import computeDataAttributes from './computeDataAttributes';

describe('computeDataAttributes', () => {
  it('returns an empty object when input is undefined', () => {
    expect(computeDataAttributes()).toEqual({});
  });

  it('returns an empty object when input is an empty object', () => {
    expect(computeDataAttributes({})).toEqual({});
  });

  it('returns an the correct data attributes', () => {
    expect(
      computeDataAttributes({
        test: 'example',
        test2: 'other example',
        testid: 'submit-button',
      }),
    ).toEqual({
      'data-test': 'example',
      'data-test2': 'other example',
      'data-testid': 'submit-button',
    });
  });
});
