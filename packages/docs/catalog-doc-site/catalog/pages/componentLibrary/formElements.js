import { Input, Select, SelectOption } from '@datacamp/waffles-form-elements';
import { AddCircleIcon, ChevronDownIcon } from '@datacamp/waffles-icons';
import { Code, Heading, Paragraph } from '@datacamp/waffles-text';
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
                    code={`() => {
  const [value, setValue] = React.useState('');
  return (
    <>
    <Input
      name="test"
      onChange={setValue}
      placeholder="placeholder text"
      value={value}
    />
    <Input      
    icon={<AddCircleIcon/>}
    label="Label"
    placeholder="an input with label and icon"
                                />
                                </>
  )
}`}
                    scope={{ AddCircleIcon, Input }}
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
                <tr className="dc-table__tr">
                  <th>disabled</th>
                  <td>boolean - optional</td>
                  <td>It blocks user interaction.</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>label</th>
                  <td>string - optional</td>
                  <td>It sets a label above the input</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>size </th>
                  <td>small, medium, large - optional</td>
                  <td>It defines the size of the input</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>errorMessage </th>
                  <td>string - optional</td>
                  <td>It renders an error message under the input field</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>id</th>
                  <td>string - optional</td>
                  <td>It sets an unique input id </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>icon</th>
                  <td>ReactElement - optional</td>
                  <td>
                    It renders a waffle icon inside the input field. The icon
                    component needs to be passed as a prop.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>required </th>
                  <td>boolean- optional</td>
                  <td>
                    Adds a required or optional indication. If required=true it
                    adds the text &quot;required&quot; on the top-right of the
                    input, if required=false it adds &quot;optional&quot; The
                    default value is undefined, which doesn&apos;t add anything.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Select Component
            </Heading>
            <Paragraph>
              The Select component should be used in a form. It takes the
              waffles SelectOption component as children. The SelectOption
              component takes &quot;disabled&quot; and &quot;value&quot; as
              props. Below there is a simple example of how this can be used.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <tr>
                  <LazyLiveEditCells
                    code={`() => {
  const [value, setValue] = React.useState('');
  return (
    <Select name="test name" onChange={setValue} value={value}>
      <SelectOption value="opt1">option1</SelectOption>
      <SelectOption value="opt2">option2</SelectOption>
      <SelectOption value="opt3" disabled>option3</SelectOption>
  </Select>
  )
}`}
                    scope={{ ChevronDownIcon, Select, SelectOption }}
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
                  <th>name</th>
                  <td>string - required</td>
                  <td>
                    Used to set the html name attribute. Uniquely indentifies
                    the select element within the current form context.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>onBlur</th>
                  <td>function - optional</td>
                  <td>
                    Called when the user removes focus from the select element.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>onChange</th>
                  <td>function - required</td>
                  <td>
                    Called when the user selects an option. This should be used
                    to set the value.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>value</th>
                  <td>string - required</td>
                  <td>
                    The value of the select element. This should be controlled
                    by listening to onChange.
                  </td>
                </tr>
                <tr className="dc-table__tr">
                  <th>disabled</th>
                  <td>boolean - optional</td>
                  <td>It blocks user interaction.</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>size </th>
                  <td>small, medium, large - optional</td>
                  <td>It defines the size of the select element</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>label</th>
                  <td>string - optional</td>
                  <td>It sets a label above the select element</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>errorMessage </th>
                  <td>string - optional</td>
                  <td>It renders an error message under the select element</td>
                </tr>
                <tr className="dc-table__tr">
                  <th>required </th>
                  <td>boolean- optional</td>
                  <td>
                    Adds a required or optional indication. If required=true it
                    adds the text &quot;required&quot; on the top-right of the
                    select element, if required=false it adds
                    &quot;optional&quot; The default value is undefined, which
                    doesn&apos;t add anything.
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
