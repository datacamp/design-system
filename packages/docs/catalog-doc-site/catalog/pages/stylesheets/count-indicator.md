## Base

```html|show-source
<div class="dc-count-indicator">
  5
</div>
```

## Modifiers
There is a red modifier, but future modifications should be handled with utility classes.

```html|show-source
<div class="dc-count-indicator dc-count-indicator--red">
  5
</div>
```

## Positioning
Right and left options are available for positioning the indicator.

```html|show-source,span-3
<a href="#" class="dc-btn dc-btn--white dc-btn--shadowed dc-btn--sm">
  Button with Indicator
  <div class="dc-count-indicator dc-count-indicator--red dc-count-indicator--left">
    5
  </div>
</a>
```

```html|show-source,span-3
<a href="#" class="dc-btn dc-btn--white dc-btn--shadowed dc-btn--sm">
  Button with Indicator
  <div class="dc-count-indicator dc-count-indicator--red dc-count-indicator--right">
    5
  </div>
</a>
```