import { childrenOfType as original } from 'airbnb-prop-types';

const childrenOfType: typeof original = (...types) => original(...types);

export default childrenOfType;
