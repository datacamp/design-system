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

  return Object.entries(dataAttributes).reduce<DataAttributes>(
    (updatedEntries, entry) => {
      const [key, value] = entry;
      return {
        ...updatedEntries,
        [`data-${key}`]: value,
      };
    },
    {},
  );
};

export default computeDataAttributes;
