import ResizableElements, {
  CollapseContext,
} from '@datacamp/waffles-resizable-elements';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-resizable-elements', module)
  .add('basic row', () => (
    <div style={{ height: '500px' }}>
      <ResizableElements orientation="row">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </ResizableElements>
    </div>
  ))
  .add('basic column', () => (
    <div style={{ height: '500px' }}>
      <ResizableElements orientation="column">
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </ResizableElements>
    </div>
  ))
  .add('collapsable row', () => (
    <div style={{ height: '500px' }}>
      <ResizableElements orientation="row">
        <div>
          <CollapseContext.Consumer>
            {({ collapsedFirstElement, toggleFirstElement }) => (
              <div>
                {`${collapsedFirstElement}`}
                <button onClick={toggleFirstElement}>toggle</button>
              </div>
            )}
          </CollapseContext.Consumer>
        </div>
        <div>hello</div>
        <div>hello</div>
        <div>
          <CollapseContext.Consumer>
            {({ collapsedLastElement, toggleLastElement }) => (
              <div>
                {`${collapsedLastElement}`}
                <button onClick={toggleLastElement}>toggle</button>
              </div>
            )}
          </CollapseContext.Consumer>
        </div>
      </ResizableElements>
    </div>
  ))
  .add('collapsable column', () => (
    <div style={{ height: '500px' }}>
      <ResizableElements orientation="column">
        <div>
          <CollapseContext.Consumer>
            {({ collapsedFirstElement, toggleFirstElement }) => (
              <div>
                {`${collapsedFirstElement}`}
                <button onClick={toggleFirstElement}>toggle</button>
              </div>
            )}
          </CollapseContext.Consumer>
        </div>
        <div>hello</div>
        <div>hello</div>
        <div>
          <CollapseContext.Consumer>
            {({ collapsedLastElement, toggleLastElement }) => (
              <div>
                {`${collapsedLastElement}`}
                <button onClick={toggleLastElement}>toggle</button>
              </div>
            )}
          </CollapseContext.Consumer>
        </div>
      </ResizableElements>
    </div>
  ));
