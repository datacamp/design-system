import { get, isNumber, isString } from 'lodash';
import PropTypes from 'prop-types';

type ValidComponents = Array<
  | ((props: React.PropsWithChildren<any>) => React.ReactNode) // eslint-disable-line @typescript-eslint/no-explicit-any
  | string
>;
interface PropValues {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const isValidComponent = (
  value: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  validComponents: ValidComponents,
): boolean =>
  isString(value) ||
  isNumber(value) ||
  validComponents.includes(get(value, 'type')) ||
  validComponents.includes(
    // This allows emotion styled versions of the valid components
    get(value, 'props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__'),
  );

const getCheckSingleChild = (
  validComponents: ValidComponents,
): ((propValues: PropValues, propName: string, name: string) => null | Error) =>
  function checkSingleChild(
    propValues: PropValues,
    propName: string,
    name: string,
  ): null | Error {
    const value = propValues[propName];
    if (!isValidComponent(value, validComponents)) {
      return new Error(
        `Invalid prop ${
          value.type
        } supplied to ${name}. only string and ${validComponents
          .map((component) =>
            isString(component) ? component : component.name,
          )
          .join(',')} are allowed as children.`,
      );
    }
    return null;
  };

/**
/* Extends the automated prop types validation generated from typescript to
/* check for a custom set of components that can be accepted as children
* */
export default (
  props: PropValues,
  componentName: string,
  validComponents: ValidComponents,
): void => {
  const checkSingleChild = getCheckSingleChild(validComponents);
  const extraPropTypeValidators = {
    children: PropTypes.oneOfType([
      checkSingleChild,
      PropTypes.arrayOf(checkSingleChild),
    ]),
  };
  PropTypes.checkPropTypes(
    extraPropTypeValidators,
    props,
    'children',
    componentName,
  );
};
