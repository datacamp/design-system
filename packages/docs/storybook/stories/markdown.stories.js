import Markdown from '@datacamp/waffles-markdown';
import { storiesOf } from '@storybook/react';
import React from 'react';

const headings = `
# This is an h1 tag
## This is an h2 tag
### This is an h3 tag
#### This is an h4 tag
##### This is an h5 tag
###### This is an h6 tag
## Heading with __emphasis__ inside
`;

const paragraphs = `
This is the first paragraph.
This is a second paragraph.
This paragraph should  
have 2 lines.
`;

const emphasis = `
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__
Only the word **strong** should be strong.
_You **can** combine them_
`;

const strikethrough = `
This paragraph has a ~~strikthrough~~ in it.
`;

const lists = `
### Unordered list
* Item 1
* Item 2
  * Item 2a
  * Item 2b
### Ordered list
1. Item 1
1. Item 2
1. Item 3
    1. Item 3a
    1. Item 3b
`;

const images = `
![This is the alt text](https://placehold.it/350x150)
`;

const links = `
http://github.com - automatic!
[GitHub](http://github.com)
`;

const blockquotes = `
As Kanye West said:
> We're living the future so
> the present is our past.
`;

const code = `
This paragraphs contains \`inline code\`.
    This is a code block
    with 2 lines
      and 2 space indentation
The following code block should highlight python code:
\`\`\`python
numbers = [1, 2, 3]
asStrings = [str(x) for x in stuff]
\`\`\`
The following code block should highlight javascript code:
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
`;

const taskLists = `
- [x] @mentions, #refs, [links](http://github.com), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
`;

const tables = `
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
`;

const textComponents = `
${headings}
${paragraphs}
${emphasis}
${strikethrough}
`;

const htmlTags = `
<h1>This is an h1<br>with HTML</h1>
<table>
  <tr>
    <td>hi</td>
    <td>there</td>
    <td>its a table</td>
  </tr>
</table>
<script>alert("obviously you shouldn’t see this")</script>
<style>body{border: 40px dotted red !important;}</style>
`;

const all =
  textComponents +
  lists +
  images +
  links +
  blockquotes +
  code +
  taskLists +
  tables +
  htmlTags;

storiesOf('waffles-markdown', module)
  .add('Text components', () => <Markdown source={textComponents} />)
  .add('Lists', () => <Markdown source={lists} />)
  .add('Images', () => <Markdown source={images} />)
  .add('Links', () => <Markdown source={links} />)
  .add('Blockquotes', () => <Markdown source={blockquotes} />)
  .add('Code', () => <Markdown source={code} />)
  .add('Task lists', () => <Markdown source={taskLists} />)
  .add('Tables', () => <Markdown source={tables} />)
  .add('HTML tags', () => <Markdown source={htmlTags} />)
  .add('All components', () => <Markdown source={all} />);
