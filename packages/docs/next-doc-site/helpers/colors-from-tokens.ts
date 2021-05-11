// eslint-disable-next-line filenames/match-exported
type Color = {
  name: string;
  value: string;
};

type ColorTokens = {
  [key: string]: string;
};

function colorsFromTokens(colors: string[], colorTokens: ColorTokens): Color[] {
  return colors.reduce<Color[]>((pickedColors, currentColor) => {
    if (colorTokens[currentColor]) {
      return pickedColors.concat({
        name: currentColor,
        value: colorTokens[currentColor],
      });
    }
    return pickedColors;
  }, []);
}

export default colorsFromTokens;
