## SCSS Import
`@import @datacamp/waffles-core/scss/components/icon.scss`;

## HTML Usage
Icons need to be referenced from a `symbols.svg` file that is included in the package. Each app needs to have this SVG inserted into the HTML.

## Sizes
There are multiple modifier classes that can be used for icons, but the size modifier is required to display an icon. There are currently 3 sizes available: `12, 18, 24`.

```html|show-source,span-2
<span class="dc-icon dc-icon--size-12">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

```html|show-source,span-2
<span class="dc-icon dc-icon--size-18">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

```html|show-source,span-2
<span class="dc-icon dc-icon--size-24">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

## Colors
Any design system color can be used in a modifier class to set the `color` value of the icon. The `color` defaults to `dc-primary`

## Initial

```html|show-source,span-2
<span class="dc-icon dc-icon--size-18 dc-icon--secondary">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

```html|show-source,span-2
<span class="dc-icon dc-icon--size-18 dc-icon--green">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

```html|show-source,span-2
<span class="dc-icon dc-icon--size-18 dc-icon--purple">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

## Active State
Icon color can be changed based on an active "state" by adding a an active modifier class and toggling an `is-active` class. 

```html|show-source,span-2
<span class="dc-icon dc-icon--size-18 dc-icon--primary dc-icon--active-secondary is-active">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

```html|show-source,span-2
<span class="dc-icon dc-icon--size-18 dc-icon--primary dc-icon--active-green is-active">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

```html|show-source,span-2
<span class="dc-icon dc-icon--size-18 dc-icon--primary dc-icon--active-purple is-active">
  <svg class="dc-icon__svg">
    <use xlink:href="#add" />
  </svg>
</span>
```

## Modifiers

#### Flex
To align with text, the `dc-icon` has a negative `top` value. As a flex child element, the icon will be misaligned. The `dc-icon--flex` modifier will vertically center the icon.

```html|show-source,span-3
<p class="dc-u-fx dc-u-fx-aic">
  <strike class="dc-u-mr-4 dc-u-color-red">Misaligned icon in a flex container</strike>
  <span class="dc-icon dc-icon--size-18 dc-icon--red">
    <svg class="dc-icon__svg">
      <use xlink:href="#add" />
    </svg>
  </span>
</p>
```

```html|show-source,span-3
<p class="dc-u-fx dc-u-fx-aic">
  <span class="dc-u-mr-4">Aligned icon in a flex container</span>
  <span class="dc-icon dc-icon--size-18 dc-icon--flex dc-icon--green">
    <svg class="dc-icon__svg">
      <use xlink:href="#add" />
    </svg>
  </span>
</p>
```