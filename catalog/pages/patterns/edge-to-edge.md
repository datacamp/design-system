Used to align content to the far edges of a container.

```hint|warning
The named version was deprecated from style guide Core.
```

## Default

```html
responsive: true
---
<div class="dc-u-fx dc-u-fx-aic dc-u-fx-jcsb">
	<div>
		Any content that is left aligned
	</div>
	<div>
		Any content that is right aligned
	</div>
</div>
```

## Stack and then split at a breakpoint

```html
responsive: true
---
<div class="dc-u-fx@md dc-u-fx-aic dc-u-fx-jcsb">
	<div class="dc-u-mb-16">
		Any content that is left aligned
	</div>
	<div class="dc-u-mb-16">
		Any content that is right aligned
	</div>
</div>
```
