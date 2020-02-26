/**
 * This selector is effectively the opposite of the :first-child selector in
 * css. Unlike :first-child this is safe to use when server side rendering
 * emotion.
 */
const ssrSafeNotFirstChildSelector = '*:not(style) ~ &';

export default ssrSafeNotFirstChildSelector;
