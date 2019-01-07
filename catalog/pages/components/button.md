Buttons have intended purposes and interactive states, so they can rarely be made up solely of utility classes. They should be an `input`, `button`, or `a` element with modifier classes for styles.

## Button Sizes
All buttons can use one of two modifier classes for sizing, plus the default.

##### Rectangular Size Modifiers
```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--sm">Secondary Button</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary">Secondary Button</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--lg">Secondary Button</a>
```

##### Squared Size Modifiers
```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--squared dc-btn--sm">
  <span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--flex">
    <svg class="dc-icon__svg">
      <use xlink:href="#arrow_down" />
    </svg>
  </span>
</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--squared">
  <span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--flex">
    <svg class="dc-icon__svg">
      <use xlink:href="#arrow_down" />
    </svg>
  </span>
</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--squared dc-btn--lg">
  <span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--flex">
    <svg class="dc-icon__svg">
      <use xlink:href="#arrow_down" />
    </svg>
  </span>
</a>
```

### Button Colors

The name of the modifier is related to the background color variable, so it's slightly misleading. This button is used for the primary action(s) on a page.

```html|show-source
<a href="#" class="dc-btn dc-btn--secondary">Secondary Button</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--primary-light">Primary Light Button</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--tertiary">Primary Light Button</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--green">Green Button</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--grey">Grey Button</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--red">Red Button</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--purple">Purple Button</a>
```