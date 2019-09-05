import Button from '@datacamp/waffles-button';
import { Input } from '@datacamp/waffles-form-elements';
import { Code, CodeBlock, Heading, Paragraph } from '@datacamp/waffles-text';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The form elements package"
        section="Component Library"
        subSection="Form-elements"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              The <Code>@datacamp/waffles-form-elements</Code> package contains
              multiple form elements.
            </Paragraph>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Input Component
            </Heading>
            <Paragraph>
              The basic Input component should be used in a form, whenever user
              text input needs to be captured. It takes no children as its
              behaviour is controlled entirely by the properties set on the
              component. Below there is a simple example of how this can be
              used, feel free to change some of the values and see how it
              impacts the Input.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <tr>
                  <LazyLiveEditCells
                    code={` 
                    ()=> {
                        const [value, setValue] = React.useState('');
             return(
                        <Input
                            name="test"
                            onChange={setValue}
                            placeholder="placeholder text"
                            value={value}
        
                          />
                          )
                    }        
                      
           `}
                    scope={{ Input }}
                  />
                </tr>
              </tbody>
            </table>
            <table className="dc-table dc-table--bordered">
              <thead className="dc-table__thead">
                <tr className="dc-table__tr">
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dc-table__tr">
                  <th>autocomplete</th>
                  <td>string - optional</td>
                  <td>This corresponds to the html autocomplete types.</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>className</th>
                  <td>string - optional</td>
                  <td>It sets the class on the rendered element.</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>dataAttributes</th>
                  <td>object - optional</td>
                  <td>
                    As with all the other waffles components, dataAttributes can
                    be used to set data- html attributes on the element
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>maxLength</th>
                  <td>number - optional</td>
                  <td>
                    The maximum number of characters permitted in the input.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>name</th>
                  <td>string - required</td>
                  <td>
                    Used to set the html name attribute. Uniquely indentifies
                    the input within the current form context.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>onBlur</th>
                  <td>function - optional</td>
                  <td>Called when the user removes focus from the input.</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>onChange</th>
                  <td>function - required</td>
                  <td>
                    Called when the user requests a change to the value of the
                    input. This should be used to set the value.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>placeholder</th>
                  <td>string - optional</td>
                  <td>
                    The placeholder text to render before the user has entered a
                    value.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>value</th>
                  <td>string - required</td>
                  <td>
                    The value of the input. This should be controlled by
                    listening to onChange.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </Page>
    </main>
  );
};
