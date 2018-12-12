# Tag

Creates a small tag element for things like XP points.

### Usage

```js
import React from 'react';
import Tag from '@datacamp/le-shared-components/lib/Tag';
class App extends React.Component {
  render() {
    return <Tag>50XP</Tag>;
  }
}
```

### Properties

| propName   | propType | defaultValue | isRequired | Description                                                                  |
| ---------- | -------- | ------------ | ---------- | ---------------------------------------------------------------------------- |
| color      | string   | undefined    | -          | The background color of the tag and sets a default contrasting text color.   |
| children   | string   |              | +          | The content of the tag.                                                      |
| extraClass | string   | ""           | -          | Any extra css class required for the root element.                           |
| rounded    | boolean  | false        | -          | Sets the border-radius of the tag to DataCamp's default radius.              |
| textColor  | string   | undefined    | -          | Sets text color of the tag and overrides the default contrasting text color. |
