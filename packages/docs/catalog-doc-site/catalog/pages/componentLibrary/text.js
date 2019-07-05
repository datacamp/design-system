import {
  Emphasis,
  Heading,
  Paragraph,
  Small,
  Strong,
  Text,
} from '@datacamp/waffles-text';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';

export default () => {
  return (
    <main>
      <CustomHeader
        description="All the components available in the @datacamp/waffles-text package"
        section="Component Library"
        subSection="Text"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              The text package contains all the components necessary for
              typography that conforms to the waffles design system. All these
              components are detailed below.
            </Paragraph>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Text
            </Heading>
            <Paragraph>
              The Text component is the basis for all the other components. It
              can be imported as follows
            </Paragraph>
            <pre>
              <code>{"import { Text } from '@datacamp/waffles-text';"}</code>
            </pre>
            <Paragraph>
              The Text component will render a span containing the text provided
              as children to the component. It has no line height, and so can be
              used wherever text is needed in another component. If a block of
              text is being rendered, the Paragraph would be a better choice of
              component.
            </Paragraph>
            <Heading as="h4" size={300}>
              Properties
            </Heading>
            <table className="dc-table dc-table--bordered">
              <thead className="dc-table__thead">
                <tr className="dc-table__tr">
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th style={{ minWidth: '275px' }}>Example code</th>
                  <th>Live Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dc-table__tr">
                  <th>children</th>
                  <td>string - required</td>
                  <td>The text to render</td>
                  <LazyLiveEditCells
                    code="<Text>Example</Text>"
                    scope={{ Text }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>className</th>
                  <td>string - optional</td>
                  <td>
                    Any extra css class required for the element. This also
                    allows styling via emotion or other libraries that use
                    className.
                  </td>
                  <LazyLiveEditCells
                    code={
                      '<Text\n  className="dc-u-bgc-red"\n>\n  Example\n</Text>'
                    }
                    scope={{ Text }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>dataAttributes</th>
                  <td>object - optional</td>
                  <td>
                    Any data-attributes to add to the rendered element. Inspect
                    the rendered element in the preview to see how the
                    attributes are added.
                  </td>
                  <LazyLiveEditCells
                    code={
                      "<Text\n  dataAttributes={{\n    cy: 'test'\n  }}\n>\n  Example\n</Text>"
                    }
                    scope={{ Text }}
                  />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Heading
            </Heading>
            <Paragraph>
              The Heading component renders a heading at various different
              sizes. It can be imported as follows
            </Paragraph>
            <pre>
              <code>{"import { Heading } from '@datacamp/waffles-text';"}</code>
            </pre>
            <Paragraph>
              The Heading component can be used to identify different areas of
              the page. The Heading supports all of the props on Text, plus
              those detailed below.
            </Paragraph>
            <Heading as="h4" size={300}>
              Properties
            </Heading>
            <table className="dc-table dc-table--bordered">
              <thead className="dc-table__thead">
                <tr className="dc-table__tr">
                  <th>Property</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th style={{ minWidth: '275px' }}>Example code</th>
                  <th>Live Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr className="dc-table__tr">
                  <th>as</th>
                  <td>string - required</td>
                  <td>
                    The element to use when rendering. This can be any of the
                    valid HTML heading elements.
                  </td>
                  <LazyLiveEditCells
                    code={
                      '<Heading\n  as="h4"\n  size={400}\n>\n  Example\n</Heading>'
                    }
                    scope={{ Heading }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>size</th>
                  <td>number - required</td>
                  <td>
                    The size of the heading. This can be any multiple of 100
                    between 300 and 800 inclusive.
                  </td>
                  <LazyLiveEditCells
                    code={
                      '<Heading\n  as="h2"\n  size={600}\n>\n  Example</Heading>'
                    }
                    scope={{ Heading }}
                  />
                </tr>
                <tr className="dc-table__tr">
                  <th>multiLine</th>
                  <td>boolean - optional</td>
                  <td>
                    Whether to allow text wrapping. This defaults to false and
                    will truncate text that is too long.
                  </td>
                  <LazyLiveEditCells
                    code={
                      '<Heading\n  as="h2"\n  size={500}\n  multiLine\n>\n  Example of a long heading\n</Heading>'
                    }
                    scope={{ Heading }}
                  />
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Paragraph
            </Heading>
            <Paragraph>
              The Paragraph component renders a a block of text. It can be
              imported as follows
            </Paragraph>
            <pre>
              <code>
                {"import { Paragraph } from '@datacamp/waffles-text';"}
              </code>
            </pre>
            <Paragraph>
              The Paragraph component should be used whenever there is a block
              of text content to render. It supports all the same props as Text,
              the only difference being that the children can include other text
              elements and not just a string.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <LazyLiveEditCells
                  code={
                    '<Paragraph>\nHere is some example text in a paragraph. It can support other text components as children. As an example <Strong>this is a Strong component</Strong>. As another example <Small>this is a Small component</Small>. And also <Emphasis>here is an Emphasis component</Emphasis>.\n</Paragraph>'
                  }
                  scope={{ Emphasis, Paragraph, Small, Strong }}
                />
              </tbody>
            </table>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Strong
            </Heading>
            <Paragraph>
              The Strong component brings attention to some text. It can be
              imported as follows
            </Paragraph>
            <pre>
              <code>{"import { Strong } from '@datacamp/waffles-text';"}</code>
            </pre>
            <Paragraph>
              The Strong component should be used within a Paragraph if there is
              a word or a phrase that has additional importance. It supports all
              the same props as Text.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <LazyLiveEditCells
                  code={
                    '<Paragraph>\n  <Strong>Here is some strong text.</Strong>\n</Paragraph>'
                  }
                  scope={{ Paragraph, Small, Strong }}
                />
              </tbody>
            </table>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Emphasis
            </Heading>
            <Paragraph>
              The Emphasis component adds a stress emphasis to some text when
              reading. It can be imported as follows
            </Paragraph>
            <pre>
              <code>
                {"import { Emphasis } from '@datacamp/waffles-text';"}
              </code>
            </pre>
            <Paragraph>
              The Emphasis component should be used within a Paragraph if there
              is a word or a phrase that should be emphasized when reading. It
              supports all the same props as Text.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <LazyLiveEditCells
                  code={
                    '<Paragraph>\n  <Emphasis>Here is some emphasized text.</Emphasis>\n</Paragraph>'
                  }
                  scope={{ Emphasis, Paragraph, Small, Strong }}
                />
              </tbody>
            </table>
          </div>
          <div className="dc-card dc-u-p-24 dc-u-mt-8">
            <Heading as="h3" size={500}>
              Small
            </Heading>
            <Paragraph>
              The Small component renders text at a smaller size than normal. It
              can be imported as follows
            </Paragraph>
            <pre>
              <code>{"import { Small } from '@datacamp/waffles-text';"}</code>
            </pre>
            <Paragraph>
              The Small component should be used within a Paragraph. It can take
              strings as children along with Strong and Emphasis components. It
              supports all the same props as Text.
            </Paragraph>
            <table className="dc-table dc-table--bordered">
              <tbody>
                <LazyLiveEditCells
                  code={
                    '<Paragraph>\n  <Small>\n    Here is some small text. And this contains some <Strong>strong text</Strong>. And <Emphasis>here is some emphasized text</Emphasis>\n  </Small>\n</Paragraph>'
                  }
                  scope={{ Emphasis, Paragraph, Small, Strong }}
                />
              </tbody>
            </table>
          </div>
        </section>
      </Page>
    </main>
  );
};
