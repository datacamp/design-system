import Card from '@datacamp/waffles-card';
import {
  Input,
  Radio,
  RadioList,
  Select,
  SelectOption,
  TextArea,
} from '@datacamp/waffles-form-elements';
import FormElementData from '@datacamp/waffles-form-elements/componentMetadata.json';
import {
  Code,
  CodeBlock,
  Heading,
  List,
  Paragraph,
  Strong,
} from '@datacamp/waffles-text';
/* @jsx jsx */
import { jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';
import PropTable from '../../components/PropTable';

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
          <Card css={{ padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Importing
            </Heading>
            <Paragraph>
              Waffles exposes several components from within{' '}
              <Code>@datacamp/waffles-form-elements</Code>.
            </Paragraph>
            <List>
              <List.Item>
                <Strong>Input –</Strong> Able to handle multiple types of text
                input.
              </List.Item>
              <List.Item>
                <Strong>Select –</Strong> Allows the user to select one from a
                list of options.
              </List.Item>
              <List.Item>
                <Strong>SelectOption -</Strong> To be used within a{' '}
                <Code>Select</Code> to specify an available option.
              </List.Item>
              <List.Item>
                <Strong>RadioList –</Strong> Allows the user to choose one from
                a list of options.
              </List.Item>
              <List.Item>
                <Strong>Radio -</Strong> To be used within a{' '}
                <Code>RadioList</Code> to specify an available option.
              </List.Item>
              <List.Item>
                <Strong>TextArea -</Strong> Able to handle longer form text
                input.
              </List.Item>
            </List>
            <CodeBlock>
              {`import {
  Input,
  Radio,
  RadioList,
  Select,
  SelectOption,
  TextArea
} from '@datacamp/waffles-form-elements';`}
            </CodeBlock>
          </Card>
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Example
            </Heading>
            <Paragraph>
              This example highlights how the components from{' '}
              <Code>@datacamp/waffles-form-elements</Code> can be used.
            </Paragraph>
            <LazyLiveEditCells
              code={`() => {
  const [name, setName] = React.useState("");
  const [fave, setFave] = React.useState("");
  const [loveLevel, setLoveLevel] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <form>
      <Input
        name="name"
        label="Full Name"
        value={name}
        onChange={setName}
        placeholder="Joe Bloggs"
      />
      <Select
        name="fave-component"
        label="Favourite Form Element"
        value={fave}
        onChange={setFave}
        description="Select your favourite from the available options."
      >
        <SelectOption value="input">Input</SelectOption>
        <SelectOption value="radio-list">RadioList</SelectOption>
        <SelectOption value="select">Select</SelectOption>
      </Select>
      <RadioList
        name="love-level"
        label="I love waffles components as much as"
        value={loveLevel}
        onChange={setLoveLevel}
      >
        <Radio value="parents">My Parents</Radio>
        <Radio value="siblings">My Siblings</Radio>
        <Radio value="children">My Children</Radio>
      </RadioList>
      <TextArea
        name="description"
        label="Feelings"
        description="Describe how using waffles components makes you feel."
        value={description}
        onChange={setDescription}
        placeholder="I get all these warm fuzzy feelings..."
        rows={6}
      />
    </form>
  );
};`}
              scope={{
                Input,
                Radio,
                RadioList,
                Select,
                SelectOption,
                TextArea,
              }}
            />
          </Card>
          <Heading as="h3" size={500}>
            Properties
          </Heading>
          <PropTable
            componentData={FormElementData['src/Input/index.tsx'][0]}
            componentName="Input"
          />
          <PropTable
            componentData={FormElementData['src/Select/index.tsx'][0]}
            componentName="Select"
          />
          <PropTable
            componentData={FormElementData['src/Select/Option.tsx'][0]}
            componentName="SelectOption"
          />
          <PropTable
            componentData={FormElementData['src/RadioList/index.tsx'][0]}
            componentName="RadioList"
          />
          <PropTable
            componentData={FormElementData['src/RadioList/Radio.tsx'][0]}
            componentName="Radio"
          />
          <PropTable
            componentData={FormElementData['src/TextArea/index.tsx'][0]}
            componentName="TextArea"
          />
        </section>
      </Page>
    </main>
  );
};
