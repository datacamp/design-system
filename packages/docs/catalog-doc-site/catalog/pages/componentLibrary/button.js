import Button from '@datacamp/waffles-button';
import { Heading, Paragraph } from '@datacamp/waffles-text';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The button component"
        section="Component Library"
        subSection="Button"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              A primitive button component, available from the{' '}
              <code>@datacamp/waffles-button</code> package on npm.
            </Paragraph>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Properties
            </Heading>
            <Paragraph>
              The Button component takes the <code>className</code>,{' '}
              <code> dataAttributes</code>, <code>ariaLabel</code>,{' '}
              <code>onClick</code> and <code>ref</code> props
              <br />
              It can be styled with the props <code>intent</code> to choose the
              color, <code>appearance</code> to choose between the outline
              (default) or filled (primary) style and <code>size</code> for the
              size.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <thead className="dc-table__thead">
                <tr className="dc-table__tr">
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th style={{ minWidth: '310px' }}>Example code</th>
                  <th>Live Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dc-table__tr">
                  <th>size</th>
                  <td>small, medium, large (optional)</td>
                  <td>The size of the button. The defaults is medium.</td>
                  <LazyLiveEditCells
                    code={'<Button size="large">Button</Button>'}
                    scope={{ Button }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>intent</th>
                  <td>neutral, danger, success, warning (optional)</td>
                  <td>
                    It defines the color of the button. This defaults to neutral
                  </td>
                  <LazyLiveEditCells
                    code={'<Button intent="danger">Button</Button>'}
                    scope={{ Button }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>appearance</th>
                  <td>default, primary (optional)</td>
                  <td>
                    It defines whether the button will have an outline or filled
                    color style. The default prop corresponds to the outline
                    style.
                  </td>
                  <LazyLiveEditCells
                    code={
                      '<Button appearance="primary" intent="success" >Button</Button>'
                    }
                    scope={{ Button }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>disabled</th>
                  <td>disabled (optional)</td>
                  <td>
                    The button can be disabled by passing &quot;disabled&quot;
                    as a prop
                  </td>
                  <LazyLiveEditCells
                    code={'<Button intent="warning" disabled  >Button</Button>'}
                    scope={{ Button }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>isLoading</th>
                  <td>isLoading (optional)</td>
                  <td>
                    By passing &quot;isLoading&quot; as a prop, the button will
                    be disabled and it will render a spinner
                  </td>
                  <LazyLiveEditCells
                    code={'<Button isLoading>Loading</Button>'}
                    scope={{ Button }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>Type=&quot;link&quot; </th>
                  <td>
                    type=&quot;link&quot; (optional) target=&quot;_self&quot;
                    (default) | target=&quot;_blank&quot; (optional)
                  </td>
                  <td>
                    When type=&quot;link&quot; you can pass href and target as
                    props. Target is &quot;_self&quot; by default.
                  </td>
                  <LazyLiveEditCells
                    code={
                      '<Button type="link" href="https://www.datacamp.com">Link</Button>'
                    }
                    scope={{ Button }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>Type=&quot;submit&quot; </th>
                  <td>type=&quot;submit&quot; (optional)</td>
                  <td>
                    When type=&quot;submit&quot; the props &quot;onClick&quot;
                    and &quot;href&quot; are not allowed.
                  </td>
                  <LazyLiveEditCells
                    code={
                      '<Button appearance="primary" intent="success" type="submit" >Submit</Button>'
                    }
                    scope={{ Button }}
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Page>
    </main>
  );
};
