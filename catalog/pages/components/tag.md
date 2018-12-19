# Tag

Creates a small tag element for things like XP points.

### Usage

**import all tag styles:** @import '@datacamp/waffles-core/scss/components/dc-tag.scss';

```code
lang: js
---
import React from 'react';
import Tag from '@datacamp/waffles-tag';
class App extends React.Component {
  render() {
    return <Tag>50XP</Tag>;
  }
}
```

```react
  <Tag color="green">50xp</Tag>
```

### Properties

```table
rows:
- {propName: 'color', propType: 'string', defaultValue: 'undefined', isRequired: '-', Description: 'The background color of the tag and sets a default contrasting text color.'}
- {propName: 'children', propType: 'string', defaultValue: '', isRequired: '+', Description: 'The content of the tag.'}
- {propName: 'extraClass', propType: 'string', defaultValue: 'undefined', isRequired: '-', Description: 'Any extra css class required for the root element.'}
- {propName: 'rounded', propType: 'boolean', defaultValue: 'false', isRequired: '-', Description: "Sets the border-radius of the tag to DataCamp's default radius."}
- {propName: 'textColor', propType: 'string', defaultValue: 'undefined', isRequired: '-', Description: 'Sets text color of the tag and overrides the default contrasting text color.'}
```
