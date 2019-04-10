Often used for aligning an image and some text. Alignment and spacing is all handled by utility classes.

```hint|warning
The named version was deprecated from style guide Core.
```

## Default

```html
responsive: true
---

<div class="dc-u-fx dc-u-fx-aic">
  <img src="http://placehold.it/200/ebf4f7/686f75" alt="" width="100">
  <div class="dc-u-pl-16">
    <h5 class="dc-u-mt-0">Bucket Title</h5>
    <p class="dc-u-mv-none">Bucket text</p>
  </div>
</div>
```

## Stack and then align at a breakpoint

```html
responsive: true
---

<div class="dc-u-fx@md dc-u-fx-aic dc-u-ta-center dc-u-ta-left@md">
  <img src="http://placehold.it/200/ebf4f7/686f75" alt="" width="100">
  <div class="dc-u-p-16">
    <h5 class="dc-u-mt-0">Bucket Title</h5>
    <p class="dc-u-mv-none">Bucket text</p>
  </div>
</div>
```
