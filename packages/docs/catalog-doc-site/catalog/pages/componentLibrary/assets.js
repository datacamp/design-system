import {
  ALPA,
  ALPALoop,
  DatacampLogo,
  Logos,
  TechLogo,
  Technologies,
} from '@datacamp/waffles-asset-components';
import Card from '@datacamp/waffles-card';
import {
  Code,
  CodeBlock,
  Heading,
  List,
  Paragraph,
  Strong,
} from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
/* @jsx jsx */
import { jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

const ComponentTable = ({
  components,
  nameFunction,
  componentFunction = (Component) => <Component />,
}) => {
  return (
    <table>
      {Object.entries(components).map(([name, Component]) => (
        <tr>
          <td>
            <Code>{nameFunction(name)}</Code>
          </td>
          <td css={{ backgroundColor: tokens.color.neutral.grey400.value.hex }}>
            {componentFunction(Component, name)}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default () => {
  return (
    <main>
      <CustomHeader
        description="A set of DataCamp assets"
        section="Component Library"
        subSection="Assets"
      />
      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Importing
            </Heading>
            <Paragraph>
              Waffles exposes several sets of components from within{' '}
              <Code>@datacamp/waffles-asset-components</Code>.
            </Paragraph>
            <List>
              <List.Item>
                <Strong>ALPALoop –</Strong> A component that can display the
                ALPA loop graphic. Can highlight a section of the loop by
                setting the <Code>highlight</Code> prop.
              </List.Item>
              <List.Item>
                <Strong>DatacampLogo –</Strong> A component that will display
                the Datacamp logo in the colours specified by the
                <Code>logomarkColor</Code> and <Code>wordmarkColor</Code> props.
              </List.Item>
              <List.Item>
                <Strong>Logos –</Strong> Contains various forms of DataCamp
                logos, and logos for other DataCamp products.
              </List.Item>
              <List.Item>
                <Strong>TechLogo –</Strong> A component that can display a logo
                for each technology. Controlled by the <Code>technology</Code>{' '}
                prop.
              </List.Item>
              <List.Item>
                <Strong>Topics –</Strong> Contains images for different topics.
              </List.Item>
            </List>
            <CodeBlock>
              {`import {
  ALPALoop,
  DatacampLogo,
  Logos,
  TechLogo,
  Topics,
} from '@datacamp/waffles-asset-components';`}
            </CodeBlock>
          </Card>
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Components
            </Heading>
            <Paragraph>
              Below are all the components exposed by the{' '}
              <Code>@datacamp/waffles-asset-components</Code> package. All of
              these accept the same set of props as an svg, so the size and
              appearance can be customised.
            </Paragraph>
            <table>
              <tr>
                <td>
                  <CodeBlock>{`<DatacampLogo height={36} logomarkColor="#03EF62" />`}</CodeBlock>
                </td>
                <td
                  css={{
                    backgroundColor: tokens.color.neutral.grey400.value.hex,
                  }}
                >
                  <DatacampLogo height={36} logomarkColor="#03EF62" />
                </td>
              </tr>
              <tr>
                <td>
                  <CodeBlock>{`<DatacampLogo
  height={36}
  logomarkColor="#03EF62"
  showWordmark
  wordmarkColor="#05192D"
/>`}</CodeBlock>
                </td>
                <td
                  css={{
                    backgroundColor: tokens.color.neutral.grey400.value.hex,
                  }}
                >
                  <DatacampLogo
                    height={36}
                    logomarkColor="#03EF62"
                    showWordmark
                    wordmarkColor="#05192D"
                  />
                </td>
              </tr>
            </table>
            <ComponentTable
              componentFunction={(Component, name) => (
                <ALPALoop
                  height={673}
                  highlight={name === 'Alpa' ? '' : name}
                  width={673}
                />
              )}
              components={ALPA}
              nameFunction={(name) =>
                `<ALPALoop ${name === 'Alpa' ? '' : `highlight="${name}" `}/>`
              }
            />
            <ComponentTable
              components={Logos.Waffles}
              nameFunction={(name) => `<Logos.Waffles.${name} />`}
            />
            <ComponentTable
              componentFunction={(Component) => (
                <Component height={39} width={39} />
              )}
              components={Technologies}
              nameFunction={(name) => {
                let parsedName = name;
                if (name === 'Python') {
                  parsedName = 'python';
                }
                if (name === 'Spreadsheet') {
                  parsedName = 'Spreadsheets';
                }
                if (name === 'Sql') {
                  parsedName = 'SQL';
                }
                return `<TechLogo height={39} width={39} technology="${parsedName}" />`;
              }}
            />
          </Card>
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Raw Assets
            </Heading>
            <Paragraph>
              These components are available for use in react. However if you
              are in an environment where this is not useful, there is also a{' '}
              <Code>@datacamp/waffles-assets</Code> package. This contains all
              the source svgs that are used to generate these components.
              Depending on the technology being used there will be a variety of
              ways to include these assets in your application.
            </Paragraph>
          </Card>
        </section>
      </Page>
    </main>
  );
};
