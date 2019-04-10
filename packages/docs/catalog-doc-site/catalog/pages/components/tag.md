Creates a small tag element for things like XP points. A tag can be linked or unlinked. 

## HTML Usage

##### SCSS Import
`@import @datacamp/waffles-core/scss/components/dc-tag.scss`;

##### Markup examples

```html|show-source
<span class="dc-tag">This is a span tag</span>
```

```html|show-source
<a class="dc-tag dc-tag--link">This is a link tag</a>
```

### HTML Modifiers

#### Tag Hue

Rounded tag, with varied background colors. Modifiers are a combination of reusable and app-specific states.

```hint
The `dc-tag--{color}` modifiers have been deprecated. Background and text colors can be set via utility classes.
```

```html|show-source
<span class="dc-tag dc-tag--hue dc-u-bgc-green">Green Utility Class</span>
```

#### Tag XP

```hint|warning
The `tag tag--xp` modifier has been deprecated. Background, text color, and padding can be set via utility classes.
```
```html|show-source
<span class="tag tag--xp">100 xp</span>
```

## React Usage

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

```react|show-source
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
