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

  return Object.keys(dataAttributes).reduce<DataAttributes>(
    (updatedEntries, key) => {
      const value = dataAttributes[key];
      return {
        ...updatedEntries,
        [`data-${key}`]: value,
      };
    },
    {},
  );
};

export default computeDataAttributes;
