type DataAttributes = {
  [key: string]: string;
};

/**
 * Prepends each key of an object with 'data-'
 */
const computeDataAttributes = (
  dataAttributes?: DataAttributes,
): DataAttributes => {
  if (!dataAttributes) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(dataAttributes).map((entry) => {
      const [key, value] = entry;
      return [`data-${key}`, value];
    }),
  );
};

export default computeDataAttributes;
