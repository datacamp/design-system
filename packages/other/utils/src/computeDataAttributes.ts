import { mapKeys } from 'lodash';

/**
 * Prepends each key of an object with 'data-'
 */
const computeDataAttributes = (dataAttributes?: {
  [key: string]: string;
}): { [key: string]: string } => {
  return mapKeys(dataAttributes, (_, key) => `data-${key}`);
};

export default computeDataAttributes;
