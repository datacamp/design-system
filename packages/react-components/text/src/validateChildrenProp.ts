import { isString } from 'lodash';
import PropTypes from 'prop-types';

/**
/* Extends the automated prop types validation generated from typescript to
/* check for a custom set of components that can be accepted as children
* */
export default (
  props: { [key: string]: any }, // eslint-disable-line @typescript-eslint/no-explicit-any
  componentName: string,
  validComponents: React.FC<any>[] // eslint-disable-line @typescript-eslint/no-explicit-any
) => {
  const extraPropTypeValidators = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(function checkChildren(
        propValue: { [key: string]: any }, // eslint-disable-line @typescript-eslint/no-explicit-any
        key,
        name
      ) {
        const value = propValue[key];
        if (
          !(
            isString(value) ||
            validComponents.includes(value.type) ||
            validComponents.includes(
              // This allows emotion styled versions of the valid components
              value.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__ // eslint-disable-line no-underscore-dangle
            )
          )
        ) {
          return new Error(
            `Invalid prop ${
              value.type
            } supplied to ${name}. only string and ${validComponents
              .map(component => component.name)
              .join(',')} are allowed as children.`
          );
        }
        return null;
      }),
    ]),
  };
  PropTypes.checkPropTypes(
    extraPropTypeValidators,
    props,
    'children',
    componentName
  );
};
