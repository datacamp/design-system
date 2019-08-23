import { mapKeys } from 'lodash';

export default (dataAttributes?: { [key: string]: string }) => {
  return mapKeys(dataAttributes, (_, key) => `data-${key}`);
};
