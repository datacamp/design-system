import React from 'react';
import { Page, HintSpecimen } from 'catalog';

export default () => {
  return (    
    <Page>
      <header>
        <h2>Additive</h2>
        <p>These classes add <code>color</code> to an element, so they can be used for building or customizing an element.</p>
      </header>

      <HintSpecimen warning>
        Needs a custom loop and helper for class conversion.
      </HintSpecimen>
    </Page>
  );
};