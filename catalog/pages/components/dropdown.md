Toggle the display of the Dropdown content by adding and removing the state class .dc-is-open. HTML-based front-ends use their own solution for toggling the class.

## Base

```html|show-source
<div class="dc-dropdown dc-is-open">
  <button class="dc-btn dc-btn--bordered dc-dropdown__toggle">
    Dropdown button
  </button>
  <div class="dc-dropdown__content">
    <ul class="dc-dropdown__list dc-dropdown__list--bordered">
      <li class="dc-dropdown__item">
        <a class="dc-dropdown__link" href="#">Action</a>
      </li>
      <li class="dc-dropdown__item dc-is-active">
        <a class="dc-dropdown__link" href="#">Another Action</a>
      </li>
      <li class="dc-dropdown__item" href="#">
        <a class="dc-dropdown__link" href="#">Something else here</a>
      </li>
    </ul>
  </div>
</div>
```

## Modifiers

#### Left
Align the content of the dropdown to the left of the container.

```html|show-source
<div class="dc-dropdown dc-dropdown--left dc-is-open">
  <button class="dc-btn dc-btn--bordered dc-dropdown__toggle">
    Dropdown button
  </button>
  <div class="dc-dropdown__content">
    <ul class="dc-dropdown__list dc-dropdown__list--bordered">
      <li class="dc-dropdown__item">
        <a class="dc-dropdown__link" href="#">Action</a>
      </li>
      <li class="dc-dropdown__item dc-is-active">
        <a class="dc-dropdown__link" href="#">Another Action</a>
      </li>
      <li class="dc-dropdown__item" href="#">
        <a class="dc-dropdown__link" href="#">Something else here</a>
      </li>
    </ul>
  </div>
</div>
```

#### Right
Align the content of the dropdown to the right of the container.

```html|show-source
<div class="dc-dropdown dc-dropdown--right dc-is-open">
  <button class="dc-btn dc-btn--bordered dc-dropdown__toggle">
    Dropdown button
  </button>
  <div class="dc-dropdown__content">
    <ul class="dc-dropdown__list dc-dropdown__list--bordered">
      <li class="dc-dropdown__item">
        <a class="dc-dropdown__link" href="#">Action</a>
      </li>
      <li class="dc-dropdown__item dc-is-active">
        <a class="dc-dropdown__link" href="#">Another Action</a>
      </li>
      <li class="dc-dropdown__item" href="#">
        <a class="dc-dropdown__link" href="#">Something else here</a>
      </li>
    </ul>
  </div>
</div>
```

#### With Caret

```html|show-source
<div class="dc-dropdown dc-dropdown--caret dc-is-open">
  <button class="dc-btn dc-btn--bordered dc-dropdown__toggle">
    Dropdown button
  </button>
  <div class="dc-dropdown__content">
    <ul class="dc-dropdown__list dc-dropdown__list--bordered">
      <li class="dc-dropdown__item">
        <a class="dc-dropdown__link" href="#">Action</a>
      </li>
      <li class="dc-dropdown__item dc-is-active">
        <a class="dc-dropdown__link" href="#">Another Action</a>
      </li>
      <li class="dc-dropdown__item" href="#">
        <a class="dc-dropdown__link" href="#">Something else here</a>
      </li>
    </ul>
  </div>
</div>
```

#### With Icon

```html|show-source
<div class="dc-dropdown dc-is-open">
  <button class="dc-btn dc-btn--bordered dc-dropdown__toggle dc-u-fx dc-u-fx-aic">
    Dropdown button
    <span class="dc-dropdown__icon dc-u-d-ib dc-u-ml-8 dc-u-wh-12">
      <svg class="dc-icon__svg">
        <use xlink:href="#arrow_down" />
      </svg>
    </span>
  </button>
  <div class="dc-dropdown__content">
    <ul class="dc-dropdown__list dc-dropdown__list--bordered">
      <li class="dc-dropdown__item">
        <a class="dc-dropdown__link" href="#">Action</a>
      </li>
      <li class="dc-dropdown__item dc-is-active">
        <a class="dc-dropdown__link" href="#">Another Action</a>
      </li>
    </ul>
  </div>
</div>
```

#### With Arrow

```html|show-source
<div class="dc-dropdown dc-dropdown--arrow dc-is-open">
  <button class="dc-btn dc-btn--bordered dc-dropdown__toggle">
    Dropdown button
  </button>
  <div class="dc-dropdown__content">
    <ul class="dc-dropdown__list dc-dropdown__list--bordered">
      <li class="dc-dropdown__item">
        <a class="dc-dropdown__link" href="#">Action</a>
      </li>
      <li class="dc-dropdown__item dc-is-active">
        <a class="dc-dropdown__link" href="#">Another Action</a>
      </li>
      <li class="dc-dropdown__item" href="#">
        <a class="dc-dropdown__link" href="#">Something else here</a>
      </li>
    </ul>
  </div>
</div>
```

## Responsive Modifiers
Positioning can be changed at the system breakpoints, using a class with the `@`. In this example, the dropdown shifts from center to left to right.

```html|show-source
<div class="dc-dropdown dc-dropdown--left@sm dc-dropdown--right@md dc-is-open">
  <button class="dc-btn dc-btn--bordered dc-dropdown__toggle">
    Dropdown button
  </button>
  <div class="dc-dropdown__content">
    <ul class="dc-dropdown__list dc-dropdown__list--bordered">
      <li class="dc-dropdown__item">
        <a class="dc-dropdown__link" href="#">Action</a>
      </li>
      <li class="dc-dropdown__item dc-is-active">
        <a class="dc-dropdown__link" href="#">Another Action</a>
      </li>
      <li class="dc-dropdown__item" href="#">
        <a class="dc-dropdown__link" href="#">Something else here</a>
      </li>
    </ul>
  </div>
</div>
```

```html|responsive,show-source
<div class="dc-dropdown dc-dropdown--left@sm dc-dropdown--right@md dc-is-open">
  <button class="dc-btn dc-btn--bordered dc-dropdown__toggle">
    Dropdown button
  </button>
  <div class="dc-dropdown__content">
    <ul class="dc-dropdown__list dc-dropdown__list--bordered">
      <li class="dc-dropdown__item">
        <a class="dc-dropdown__link" href="#">Action</a>
      </li>
      <li class="dc-dropdown__item dc-is-active">
        <a class="dc-dropdown__link" href="#">Another Action</a>
      </li>
      <li class="dc-dropdown__item" href="#">
        <a class="dc-dropdown__link" href="#">Something else here</a>
      </li>
    </ul>
  </div>
</div>
```

