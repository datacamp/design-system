/**
 * This is a css selector equiilant of ':first-child that is compatible with
 * emotion's ssr rendering. It also disables the related warning about using
 * ':first-child' when doing SSR.
 */
export default ':first-child:not(style), style:first-child + * /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';
