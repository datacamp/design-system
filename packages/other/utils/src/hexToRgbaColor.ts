const hexRegex = /^#([a-fA-F0-9]{3}){1,2}$/;

/**
 * Converts HEX color to RGBA counterpart, with optional alpha setting
 */
const hexToRgbaColor = (hexColor: string, alpha = 1): string => {
  if (!hexRegex.test(hexColor)) {
    throw new Error(
      "Couldn't parse the color string. Please provide the color as a string in HEX notation.",
    );
  }

  const value = hexColor.slice(1);
  const group = value.length / 3;
  return `rgba(${[0, 1, 2]
    .map((i) => value.slice(i * group, (i + 1) * group))
    .map((v) => parseInt((v + v).slice(-2), 16).toString())
    .concat(alpha.toString())
    .join(', ')})`;
};

export default hexToRgbaColor;
