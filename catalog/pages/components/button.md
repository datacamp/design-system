Buttons have intended purposes and interactive states, so they can rarely be made up solely of utility classes. They should be an `input`, `button`, or `a` element with modifier classes for styles.

## Shapes
Buttons with text default to elongated (rectangular) shapes with borders and/or background colors. There are options to remove those features and to square off a button without text.

##### Rectangular

```html|show-source
<a href="#" class="dc-btn dc-btn--secondary">Secondary</a>
```

##### Inline

Remove the padding, background color, and border. This should be used with an icon and in HTML-based front-ends, it is added according to how icons are added in the app.

```html|show-source
<a href="#" class="dc-btn dc-btn--inline">
  Inline
  <span class="dc-icon dc-icon--size-18 dc-icon--primary dc-icon--flex dc-u-ml-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#archive" />
    </svg>
  </span>
</a>
```
##### Squared

Square the button and center an icon within it. Any icon can be used, based on the design.

```html|show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--squared">
  <span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--flex">
    <svg class="dc-icon__svg">
      <use xlink:href="#arrow_down" />
    </svg>
  </span>
</a>
```

## Shape Modifiers

##### Block
The elongated buttons can be set to full-width with an additional class. 

```html|show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--block">Secondary</a>
```

## Sizes
All buttons can use one of two modifier classes for sizing, plus the default.

##### Rectangular Size Modifiers
```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--sm">Secondary</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary">Secondary</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--lg">Secondary</a>
```

##### Inline Size Modifiers

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--inline dc-btn--sm">
  Inline
  <span class="dc-icon dc-icon--size-18 dc-icon--primary dc-icon--flex dc-u-ml-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#archive" />
    </svg>
  </span>
</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--inline">
  Inline
  <span class="dc-icon dc-icon--size-18 dc-icon--primary dc-icon--flex dc-u-ml-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#archive" />
    </svg>
  </span>
</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--inline dc-btn--lg">
  Inline
  <span class="dc-icon dc-icon--size-18 dc-icon--primary dc-icon--flex dc-u-ml-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#archive" />
    </svg>
  </span>
</a>
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

### Colors

The name of the modifier is related to the background color variable, so it's slightly misleading. This button is used for the primary action(s) on a page.

```html|show-source
<a href="#" class="dc-btn dc-btn--secondary">Secondary</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--primary-light">Primary Light</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--tertiary">Tertiary</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--green">Green</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--grey">Grey</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--red">Red</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--purple">Purple</a>
```

```html|show-source
<a href="#" class="dc-btn dc-btn--white">White</a>
```

### Color Combinations

##### White background with a shadow and primary hover color
```html|show-source
<a href="#" class="dc-btn dc-btn--white dc-btn--white dc-btn--shadowed">Shadowed</a>
```

##### White background with a shadow and green hover color
```html|show-source
<a href="#" class="dc-btn dc-btn--white dc-btn--white-green dc-btn--shadowed">Shadowed</a>
```

##### White background with a shadow and red hover color
```html|show-source
<a href="#" class="dc-btn dc-btn--white dc-btn--white-red dc-btn--shadowed">Shadowed</a>
```

##### Tertiary button with light text
```html|show-source,dark
<a href="#" class="dc-btn dc-btn--tertiary dc-btn--text-light">Light Text</a>
```

### Text and Icons
In HTML-based front-ends, the addition of the icon and the spacing is handled in the HTML, but there are guidelines for the spacing. The three sizes are displayed here, with the proper icon size and spacing utility classes.

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--sm">
  Text and Icon
  <span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--flex dc-u-ml-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#arrow_2_right" />
    </svg>
  </span>
</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary">
  Text and Icon
  <span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--flex dc-u-ml-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#arrow_2_right" />
    </svg>
  </span>
</a>
```

```html|span-2,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--lg">
  Text and Icon
  <span class="dc-icon dc-icon--size-24 dc-icon--grey-dark dc-icon--flex dc-u-ml-16">
    <svg class="dc-icon__svg">
      <use xlink:href="#arrow_2_right" />
    </svg>
  </span>
</a>
```

### Bordered

Used for links (read more) or less important actions.

Expansion of the original dc-btn--tertiary, for bordered buttons of different colors. The default modifier has styles and there are options for additional modifiers. Only one modifier should be added to a button. For example, the LinkedIn button is dc-btn dc-btn--bordered-linkedin.

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--bordered">Bordered</a>
```

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--bordered-grey-light">Bordered Grey Light</a>
```

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--bordered-red">Bordered Red</a>
```

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--bordered-green">Bordered Green</a>
```

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--bordered-facebook">
  <span class="dc-icon dc-icon--size-18 dc-icon--facebook-square dc-icon--flex dc-u-mr-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#facebook_square" />
    </svg>
  </span>
  Facebook
</a>
```

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--bordered-google-plus">
  <span class="dc-icon dc-icon--size-18 dc-icon--google-plus-square dc-icon--flex dc-u-mr-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#google_plus_square" />
    </svg>
  </span>
  Google
</a>
```

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--bordered-linkedin">
  <span class="dc-icon dc-icon--size-18 dc-icon--linkedin-square dc-icon--flex dc-u-mr-8">
    <svg class="dc-icon__svg">
      <use xlink:href="#linkedin_square" />
    </svg>
  </span>
  LinkedIn
</a>
```

### Functional Combinations

##### Multi Button
This is a wrapper element containing two "buttons", often used for one link and one on-page action. It requires a special modifier to handle each interaction.

```html|show-source
<div class="dc-multi-btn dc-multi-btn--secondary">
	<a class="dc-multi-btn__item dc-multi-btn__text" href="">
		Button
	</a>
	<button class="dc-multi-btn__item dc-multi-btn__icon">
		<span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--flex">
      <svg class="dc-icon__svg">
        <use xlink:href="#arrow_down" />
      </svg>
    </span>
	</button>
</div>
```

## States
All buttons can be disabled, preferably with an attribute. If there is a reason to disable an `a` element, there is a class that can be toggled.

##### Disabled

```html|span-3,show-source
<button class="dc-btn dc-btn--secondary" disabled>Disabled</button>
```

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--secondary is-disabled">Disabled</a>
```

##### Loading
This is stateful, with the `dc-is-loading` class handling handling the visual change in HTML-based front-ends. The changing of the state is handled by in-app JS.

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--sm dc-u-fx-fdc dc-is-loading">
  <div class="dc-btn__spinner">
    <span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--spinner">
      <svg class="dc-icon__svg">
        <use xlink:href="#spinner" />
      </svg>
    </span>
  </div>
  <div class="dc-btn__content">Secondary</div>
</a>
```

```html|span-3,show-source
<a href="#" class="dc-btn dc-btn--secondary dc-btn--sm dc-u-fx-fdc">
  <div class="dc-btn__spinner">
    <span class="dc-icon dc-icon--size-18 dc-icon--grey-dark dc-icon--spinner">
      <svg class="dc-icon__svg">
        <use xlink:href="#spinner" />
      </svg>
    </span>
  </div>
  <div class="dc-btn__content">Secondary</div>
</a>
```



