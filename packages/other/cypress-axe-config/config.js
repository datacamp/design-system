module.exports = {
  rules: {
    'aria-hidden-focus': { enabled: false }, // Our modals manually keyboard trap so this throws false errors
    'color-contrast': { enabled: false }, // remove after rebranding
    'landmark-one-main': { enabled: false }, // storybook is not a real app so landmark is on parent
    region: { enabled: false }, // storybook is not a real app so landmark is on parent
  },
};
