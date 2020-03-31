import computeDataAttributes from './computeDataAttributes';

describe('computeDataAttributes', () => {
  it('returns an empty object when input undefined', () => {
    expect(computeDataAttributes()).toEqual({});
  });

  it('returns an empty object when input an empty object', () => {
    expect(computeDataAttributes({})).toEqual({});
  });

  it('returns an the correct data attributes', () => {
    expect(
      computeDataAttributes({ test: 'example', test2: 'other example' }),
    ).toEqual({
      'data-test': 'example',
      'data-test2': 'other example',
    });
  });
});
