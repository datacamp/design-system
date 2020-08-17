Creates a small tag element for things like XP points. A tag can be linked or unlinked. For react projects it is recommended to use the [badge component](/component-library/text).

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

#### Sizes

By default the tag renders as a small tag. use a modifier to get a large one.

```html|show-source
<span class="dc-tag dc-tag--lg">Large tag</span>
```

#### Colors

Set the color of the tag using utility classes

```html|show-source
<span class="dc-tag dc-u-bgc-green">Green Utility Class</span>
```

```html|show-source
<span class="dc-tag dc-u-bgc-navy dc-u-color-white">Navy Utility Class</span>
```
