Containers for content, with a background and box-shadow. They have padding by default, which can be overridden by utility classes.


#### SCSS Import

## Spacing

#### Base

```html|show-source
<div class="dc-card">
  Intended for small UI items, with 12px padding.
</div>
```

#### Content

```html|show-source
<div class="dc-card dc-card--content">
  Intended for normal content, with 24px padding.
</div>
```

## Modifications

#### Shadow small

```html|show-source
<div class="dc-card dc-card--shadowed-sm">
  Small box-shadow
</div>
```

#### Shadow large

```html|show-source
<div class="dc-card dc-card--shadowed-lg">
  Large box-shadow
</div>
```

#### Shadow extra large

```html|show-source
<div class="dc-card dc-card--shadowed-xl">
  Extra large box-shadow
</div>
```

#### Bordered

```html|show-source
<div class="dc-card dc-card--bordered">
  Border, instead of box-shadow
</div>
```

#### Interactive

```html|show-source
<div class="dc-card dc-card--interactive">
  Hover effect, can be added to any card
</div>
```

## Combinations

#### Sectioned
Apply the card styles to a series of elements. Any of the card modifiers can be combined with `dc-card`.

```html|show-source
<div class="dc-card dc-card--sectioned ">
  <div class="dc-card__header">
    Header
  </div>
  <div class="dc-card__body">
    Body
  </div>
  <div class="dc-card__footer">
    Footer
  </div>
</div>
```

## Customization

#### Responsive spacing

```html|responsive
<div class="dc-card dc-u-p-8 dc-u-p-48@md">
  Intended for small UI items, with 12px padding.
</div>
```

