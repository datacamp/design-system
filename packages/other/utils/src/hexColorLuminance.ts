import hexToRgbaColor from './hexToRgbaColor';

const rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;

/**
 * Calculates HEX color luminance
 */
function hexColorLuminance(hexColor: string): number {
  const rgbaColor = hexToRgbaColor(hexColor);
  const rgbaMatched = rgbaRegex.exec(rgbaColor);

  if (!rgbaMatched) {
    throw new Error("Couldn't parse the RGBA color string.");
  }

  // Grab red, green, blue channels, since we don't need alpha
  const channels = [1, 2, 3].map((index) => {
    return parseInt(`${rgbaMatched[index]}`, 10);
  });

  const [r, g, b] = channels.map((value) => {
    const channel = value / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

export default hexColorLuminance;
