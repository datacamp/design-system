# Heading

The Heading component is used as the h1-h6 titles of a section or view.

### Usage

```js
import React from 'react';
import Heading from '@datacamp/waffles-heading';
class App extends React.Component {
  render() {
    return <Heading>Course Title</Heading>;
  }
}
```

### Properties

| propName   | propType | defaultValue | isRequired | Description                                                 |
| ---------- | -------- | ------------ | ---------- | ----------------------------------------------------------- |
| children   | string   |              | +          | The content of the tag.                                     |
| element    | string   | "h2"         | -          | Sets the html heading element tag (h1, h2, h3, h4, h5, h6). |
| extraClass | string   | ""           | -          | Any extra css class required for the root element.          |
