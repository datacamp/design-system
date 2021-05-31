import hexColorLuminance from './hexColorLuminance';

describe('hexColorLuminance', () => {
  it('converts HEX color value to RGB counterpart when opacity is not provided', () => {
    expect(hexColorLuminance('#0033FF')).toEqual(0.096);
    expect(hexColorLuminance('#03f')).toEqual(0.096);
    expect(hexColorLuminance('#03ef62')).toEqual(0.626);
    expect(hexColorLuminance('#777')).toEqual(0.184);
    expect(hexColorLuminance('#FFF')).toEqual(1);
    expect(hexColorLuminance('#000000')).toEqual(0);
  });

  it('throws an error when icorrect HEX value is provided', () => {
    const ERROR_MESSAGE =
      "Couldn't parse the color string. Please provide the color as a string in HEX notation.";
    expect(() => {
      hexColorLuminance('abc');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexColorLuminance('#ABC1');
    }).toThrow(ERROR_MESSAGE);
    expect(() => {
      hexColorLuminance('#AB');
    }).toThrow(ERROR_MESSAGE);
  });
});
