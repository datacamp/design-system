module.exports = {
  rules: {
    'aria-hidden-focus': { enabled: false }, // Our modals manually keyboard trap so this throws false errors
    'color-contrast': { enabled: false }, // Remove after rebranding
    label: { enabled: false }, // Disabled due to false positives
    'landmark-one-main': { enabled: false }, // Storybook is not a real app so landmark is on parent
    region: { enabled: false }, // Storybook is not a real app so landmark is on parent
  },
};
