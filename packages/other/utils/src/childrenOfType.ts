import { childrenOfType as original, ReactTypeLike } from 'airbnb-prop-types';
import PropTypes from 'prop-types';

function isEmotionType(...types: ReactTypeLike[]) {
  return function validator(
    props: { [key: string]: any },
    propName: string,
    componentName: string,
  ): Error | null {
    const propValue = props[propName];
    if (types.includes(propValue?.props?.__EMOTION_TYPE_PLEASE_DO_NOT_USE__)) {
      return null;
    }
    return new Error(`Invalid prop ${propName} provided to ${componentName}`);
  };
}

const childrenOfType = (
  ...types: ReactTypeLike[]
): PropTypes.Requireable<unknown> =>
  PropTypes.oneOfType([original(...types), isEmotionType(...types)]);

export default childrenOfType;
