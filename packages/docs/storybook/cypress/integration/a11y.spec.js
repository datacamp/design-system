describe('a11y testing', () => {
  before(() => {
    cy.visitStorybook();
    cy.injectAxe();
  });

  it('renders every story', () => {
    cy.window()
      .then(win => {
        return win.stories.reduce((stories, parentStory) => {
          const category = parentStory.kind;
          return [
            ...stories,
            ...parentStory.stories.map(story => ({
              category,
              title: story.name,
            })),
          ];
        }, []);
      })
      .each(({ category, title }) => {
        cy.loadStory(category, title);
        cy.checkA11y(null, {
          rules: {
            'aria-hidden-focus': { enabled: false }, // Our modals manually keyboard trap so this throws false errors
            'color-contrast': { enabled: false }, // remove after rebranding
            'landmark-one-main': { enabled: false }, // storybook is not a real app so landmark is on parent
            region: { enabled: false }, // storybook is not a real app so landmark is on parent
          },
        });
      });
  });
});
