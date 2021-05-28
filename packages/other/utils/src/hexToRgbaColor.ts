/**
 * Converts HEX color to RGBA counterpart, with optional alpha setting
 */
const hexToRgbaColor = (hex: string, alpha = 1): string => {
  const value = hex.slice(1);
  const group = value.length / 3;
  return `rgba(${[0, 1, 2]
    .map((i) => value.slice(i * group, (i + 1) * group))
    .map((v) => parseInt((v + v).slice(-2), 16).toString())
    .concat(alpha.toString())
    .join(', ')})`;
};

export default hexToRgbaColor;
