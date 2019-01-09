## Usage
Flash banners are used for giving feedback when users perform an action. For example submit a form, the flash banner indicates if the action was successful.

```hint
Framework Dependency: Generation of the message varies per framework and there is a JS dependency for the close button.
```

## Modifiers
Flash notices require the base class and a modifier class. There are no default styles that will be applied to the background.

#### Notice

```html|show-source,frame
<div class="dc-flash-wrapper">
  <div class="dc-flash dc-flash--notice">
    <div class="dc-flash__content">
      <strong>Stay tuned!</strong> Visit <a href="#">this page in the meantime</a>.
    </div>
    <div class="dc-flash__close">
      <span class="dc-icon dc-icon--size-12 dc-icon--white dc-icon--flex">
        <svg class="dc-icon__svg">
          <use xlink:href="#close" />
        </svg>
      </span>
    </div>
  </div>
</div>
```

#### Success

```html|show-source,frame
<div class="dc-flash-wrapper">
  <div class="dc-flash dc-flash--success">
    <div class="dc-flash__content">
      <strong>Well done!</strong> You successfully read this important <a href="#">alert message</a>.
    </div>
    <div class="dc-flash__close">
      <span class="dc-icon dc-icon--size-12 dc-icon--white dc-icon--flex">
        <svg class="dc-icon__svg">
          <use xlink:href="#close" />
        </svg>
      </span>
    </div>
  </div>
</div>
```

#### Error

```html|show-source,frame
<div class="dc-flash-wrapper">
  <div class="dc-flash dc-flash--error">
    <div class="dc-flash__content">
      <strong>Oh snap!</strong> Change a <a href="#">few things</a> up and try submitting again.
    </div>
    <div class="dc-flash__close">
      <span class="dc-icon dc-icon--size-12 dc-icon--white dc-icon--flex">
        <svg class="dc-icon__svg">
          <use xlink:href="#close" />
        </svg>
      </span>
    </div>
  </div>
</div>
```

#### With Button
Some flash banner designs call for a button as a CTA. This requires the output of additional markup and can be used with any of the modifiers.

```html|show-source,frame
<div class="dc-flash-wrapper">
  <div class="dc-flash dc-flash--error">
    <div class="dc-flash__content">
      <strong>Oh snap!</strong> Change a <a href="#">few things</a> up and try submitting again.
    </div>
    <div class="dc-flash__cta">
      <button class="dc-btn dc-btn--bordered-white">Copy Link</button>
    </div>
    <div class="dc-flash__close">
      <span class="dc-icon dc-icon--size-12 dc-icon--white dc-icon--flex">
        <svg class="dc-icon__svg">
          <use xlink:href="#close" />
        </svg>
      </span>
    </div>
  </div>
</div>
```

## Combinations
Multiple messages will stack, but need to be appended to the parent element, `.dc-flash-wrapper`.

```html|show-source,frame
<div class="dc-flash-wrapper">
  <div class="dc-flash dc-flash--notice">
    <div class="dc-flash__content">
      <strong>Stay tuned!</strong> Visit <a href="#">this page in the meantime</a>.
    </div>
    <div class="dc-flash__close">
      <span class="dc-icon dc-icon--size-12 dc-icon--white dc-icon--flex">
        <svg class="dc-icon__svg">
          <use xlink:href="#close" />
        </svg>
      </span>
    </div>
  </div>
  <div class="dc-flash dc-flash--error">
    <div class="dc-flash__content">
      <strong>Oh snap!</strong> Change a <a href="#">few things</a> up and try submitting again.
    </div>
    <div class="dc-flash__close">
      <span class="dc-icon dc-icon--size-12 dc-icon--white dc-icon--flex">
        <svg class="dc-icon__svg">
          <use xlink:href="#close" />
        </svg>
      </span>
    </div>
  </div>
  <div class="dc-flash dc-flash--success">
    <div class="dc-flash__content">
      <strong>Well done!</strong> You successfully read this important <a href="#">alert message</a>.
    </div>
    <div class="dc-flash__close">
      <span class="dc-icon dc-icon--size-12 dc-icon--white dc-icon--flex">
        <svg class="dc-icon__svg">
          <use xlink:href="#close" />
        </svg>
      </span>
    </div>
  </div>
</div>
```

