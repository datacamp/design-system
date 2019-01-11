## SCSS Import
`@import @datacamp/waffles-core/scss/components/progress-bar.scss`;

## HTML Usage
Used for XP for example, where the unit is not always percentages. Fill is controlled by an inline width style.


## Base 

#### Zero

```html|show-source
<div class="dc-progress-bar">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 0%;"></span>
  </div>
</div>
```

#### Partial
```hint
The width needs to be dynamically updated by the app front-end.
```

```html|show-source
<div class="dc-progress-bar">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 75%;"></span>
  </div>
</div>
```

#### Completed
```hint
The completed class needs to be dynamically updated by the app front-end.
```

```html|show-source
<div class="dc-progress-bar dc-progress-bar--completed">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 100%;">100%</span>
  </div>
</div>
```

## Inner Text 

#### Zero

```html|show-source
<div class="dc-progress-bar">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 0%;"></span>
  </div>
</div>
```

#### Partial
```hint
The width and text needs to be dynamically updated by the app front-end.
```

```html|show-source
<div class="dc-progress-bar">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 75%;">75%</span>
  </div>
</div>
```

#### Complete

```html|show-source
<div class="dc-progress-bar dc-progress-bar--completed">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 100%;">100%</span>
  </div>
</div>
```

## Light

#### Zero

```html|show-source
<div class="dc-progress-bar dc-progress-bar--light">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 0%;"></span>
  </div>
</div>
```

#### Partial

```html|show-source
<div class="dc-progress-bar dc-progress-bar--light">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 75%;">75%</span>
  </div>
</div>
```

#### Completed

```html|show-source
<div class="dc-progress-bar dc-progress-bar--light dc-progress-bar--completed">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 100%;">100%</span>
  </div>
</div>
```

## Small

#### Zero

```html|show-source
<div class="dc-progress-bar dc-progress-bar--small">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 0%;"></span>
  </div>
</div>
```

#### Partial

```html|show-source
<div class="dc-progress-bar dc-progress-bar--small">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 75%;"></span>
  </div>
</div>
```

#### Completed

```html|show-source
<div class="dc-progress-bar dc-progress-bar--small dc-progress-bar--completed">
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 100%;"></span>
  </div>
</div>
```

## Small with Text
Used for annotating the percentage progress. To display text, an additional span with the value is needed. This should only be displayed if the value is 3% or more.


#### Zero

```html|show-source
<div class="dc-progress-bar dc-progress-bar--small">
  <span class="dc-progress-bar__text">0%</span>
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 0%;"></span>
  </div>
</div>
```

#### Partial

```html|show-source
<div class="dc-progress-bar dc-progress-bar--small">
  <span class="dc-progress-bar__text">75%</span>
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 75%;"></span>
  </div>
</div>
```

#### Completed

```html|show-source
<div class="dc-progress-bar dc-progress-bar--small">
  <span class="dc-progress-bar__text">100%</span>
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 100%;"></span>
  </div>
</div>
```

## Colors
Modifiers of the progress bar are available to control the color of the text and the fill. These were added for password verification.

#### Partial

```html|show-source,span-2
<div class="dc-progress-bar dc-progress-bar--small dc-progress-bar--red">
  <span class="dc-progress-bar__text">75%</span>
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 75%;"></span>
  </div>
</div>
```

```html|show-source,span-2
<div class="dc-progress-bar dc-progress-bar--small dc-progress-bar--orange">
  <span class="dc-progress-bar__text">75%</span>
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 75%;"></span>
  </div>
</div>
```

```html|show-source,span-2
<div class="dc-progress-bar dc-progress-bar--small dc-progress-bar--green">
  <span class="dc-progress-bar__text">75%</span>
  <div class="dc-progress-bar__bar">
    <span class="dc-progress-bar__fill" style="width: 75%;"></span>
  </div>
</div>
```