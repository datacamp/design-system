import cypressAxeConfig from '@datacamp/waffles-cypress-axe-config';

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
        if (category === 'stylesheets') return;
        cy.loadStory(category, title);
        cy.checkA11y(
          { exclude: [['path'], ['mask'], ['linearGradient']] },
          cypressAxeConfig,
        );
      });
  });
});
