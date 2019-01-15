import React from 'react';
import { Page, HintSpecimen } from 'catalog';

export default () => {
  return (    
    <Page>
      <header>
        <h2>Additive</h2>
        <p>These classes add <code>border</code> to an element, so they can be used for building or customizing an element.</p>
      </header>

      <HintSpecimen warning>
        Needs a custom loop and helper for class conversion.
      </HintSpecimen>

      <header>
        <h2>Subtractive</h2>
        <p>These classes remove <code>border</code> from an element, so they can be used for customizing an element with <code>border</code> applied via CSS.</p>
      </header>

      <HintSpecimen warning>
        Needs a custom loop and helper for class conversion.
      </HintSpecimen>
    </Page>
  );
};