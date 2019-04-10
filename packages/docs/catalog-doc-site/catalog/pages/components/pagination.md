## SCSS Import
`@import @datacamp/waffles-core/scss/components/pagination.scss`;

## HTML Usage
Used for navigating between pages used in enterprise & teach. 

```html|show-source
<div class="dc-pagination">
  <ul class="dc-pagination__list">
    <li>
      <button class="dc-btn--link dc-u-mr-24">
        <svg class="dc-icon--primary" width="15" height="12">
          <use xlink:href="#arrow_left_double" />
        </svg>
      </button>
    </li>
    <li>
      <button class="dc-btn--link dc-u-mr-24">
        <svg class="dc-icon--primary" width="12" height="12">
          <use xlink:href="#arrow_left" />
        </svg>
      </button>
    </li>
    <li>
      <button class="dc-pagination__page">1</button>
    </li>
    <li>
      <button class="dc-pagination__page">2</button>
    </li>
    <li>
      <button class="dc-pagination__page">3</button>
    </li>
    <li>
      <button class="dc-btn--link dc-u-ml-24">
        <svg class="dc-icon--primary" width="12" height="12">
          <use xlink:href="#arrow_right" />
        </svg>
      </button>
    </li>
    <li>
      <button class="dc-btn--link dc-u-ml-24">
        <svg class="dc-icon--primary" width="15" height="12">
          <use xlink:href="#arrow_right_double" />
        </svg>
      </button>
    </li>
  </ul>
</div>
```

## States
Add the `.dc-is-active` to `.dc-pagination__page` for active page state.

```html|show-source
<div class="dc-pagination">
  <ul class="dc-pagination__list">
    <li>
      <button class="dc-btn--link dc-u-mr-24">
        <svg class="dc-icon--primary" width="15" height="12">
          <use xlink:href="#arrow_left_double" />
        </svg>
      </button>
    </li>
    <li>
      <button class="dc-btn--link dc-u-mr-24">
        <svg class="dc-icon--primary" width="12" height="12">
          <use xlink:href="#arrow_left" />
        </svg>
      </button>
    </li>
    <li>
      <button class="dc-pagination__page dc-is-active">1</button>
    </li>
    <li>
      <button class="dc-pagination__page">2</button>
    </li>
    <li>
      <button class="dc-pagination__page">3</button>
    </li>
    <li>
      <button class="dc-btn--link dc-u-ml-24">
        <svg class="dc-icon--primary" width="12" height="12">
          <use xlink:href="#arrow_right" />
        </svg>
      </button>
    </li>
    <li>
      <button class="dc-btn--link dc-u-ml-24">
        <svg class="dc-icon--primary" width="15" height="12">
          <use xlink:href="#arrow_right_double" />
        </svg>
      </button>
    </li>
  </ul>
</div>
```