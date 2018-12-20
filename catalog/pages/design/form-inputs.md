## Text

```html|span-3
<label class="dc-label">
	<span class="dc-label__number">1</span>
	First name
</label>
<input class="dc-input--text" type="text" placeholder="Placeholder text">
```

```html|span-3
<label class="dc-label">
	First name
</label>
<input class="dc-input--text" type="text" placeholder="Placeholder text">
```

## Text Disabled

```html|span-3
<label class="dc-label">
	<span class="dc-label__number">1</span>
	First name
</label>
<input class="dc-input--text" type="text" placeholder="Placeholder text" disabled>
```

## Email

```html|span-3
<div class="dc-input-group">
	<span class="dc-input-group__icon">
		<span class="dc-icon dc-icon--size-18 dc-icon--white dc-icon--flex">
			<svg class="dc-icon__svg">
				<use xlink:href="#mail" />
			</svg>
		</span>
	</span>
	<input class="dc-input-group__input dc-input--text" type="email" placeholder="Email address">
</div>
```

```html|span-3
<div class="dc-input-group">
	<span class="dc-input-group__icon">
		<span class="dc-icon dc-icon--size-18 dc-icon--white dc-icon--flex">
			<svg class="dc-icon__svg">
				<use xlink:href="#mail" />
			</svg>
		</span>
	</span>
	<input class="dc-input-group__input dc-input--text" type="email" placeholder="Email address" disabled>
</div>
```

## Combo
Use any icon within the `dc-input-combo__cap` and the `--start` and `--end` modifier for positioning the cap.

```html|span-3
<div class="dc-input-combo dc-input-combo--start">
	<div class="dc-input-combo__cap dc-u-fx-center">
		<span class="dc-icon dc-icon--size-24 dc-icon--primary dc-icon--flex">
			<svg class="dc-icon__svg">
				<use xlink:href="#eye" />
			</svg>
		</span>
	</div>
	<input class="dc-input--text dc-input-combo__input" placeholder="Placeholder text" type="text">
</div>
```

```html|span-3
<div class="dc-input-combo dc-input-combo--end">
	<div class="dc-input-combo__cap dc-u-fx-center">
		<span class="dc-icon dc-icon--size-24 dc-icon--primary dc-icon--flex">
			<svg class="dc-icon__svg">
				<use xlink:href="#eye" />
			</svg>
		</span>
	</div>
	<input class="dc-input--text dc-input-combo__input" placeholder="Placeholder text" type="text">
</div>
```

## Select
```html|span-3
<div class="dc-select-container">
	<select class="dc-select">
		<option value="" selected>Select a country...</option>
		<option>Belgium</option>
		<option>USA</option>
		<option>France</option>
	</select>
</div>
```

## Checkbox

```html|span-3
<label class="dc-input-checkbox">
	<input class="dc-input-checkbox__input" type="checkbox">
	<span class="dc-input-checkbox__indicator">
		<span class="dc-icon dc-input-checkbox__check">
			<svg class="dc-icon__svg">
				<use xlink:href="#checkmark" />
			</svg>
		</span>
	</span>
</label>
```

```html|span-3
<label class="dc-input-checkbox ">
	<input class="dc-input-checkbox__input" type="checkbox">
	<span class="dc-input-checkbox__indicator u-fx-center">
		<span class="dc-icon dc-input-checkbox__check">
			<svg class="dc-icon__svg">
				<use xlink:href="#checkmark" />
			</svg>
		</span>
	</span>
	<span class="dc-input-checkbox__text">Checkbox Label</span>
</label>
```

## Checkbox with Error
The error styles are handled by a parent class name. The parent of the checkbox needs to have the class toggled based on the error state.

```html|span-3
<div class="dc-has-error">
	<label class="dc-input-checkbox">
		<input class="dc-input-checkbox__input" type="checkbox">
		<span class="dc-input-checkbox__indicator">
			<span class="dc-icon dc-input-checkbox__check">
				<svg class="dc-icon__svg">
					<use xlink:href="#checkmark" />
				</svg>
			</span>
		</span>
	</label>
</div>
```

```html|span-3
<div class="dc-has-error">
	<label class="dc-input-checkbox">
		<input class="dc-input-checkbox__input" type="checkbox">
		<span class="dc-input-checkbox__indicator">
			<span class="dc-icon dc-input-checkbox__check">
				<svg class="dc-icon__svg">
					<use xlink:href="#checkmark" />
				</svg>
			</span>
		</span>
		<span class="dc-input-checkbox__text">Checkbox Label</span>
	</label>
</div>
```

## Checkbox Disabled

```html|span-3
<label class="dc-input-checkbox">
	<input class="dc-input-checkbox__input" type="checkbox" disabled>
	<span class="dc-input-checkbox__indicator u-fx-center">
		<span class="dc-icon dc-input-checkbox__check">
			<svg class="dc-icon__svg">
				<use xlink:href="#checkmark" />
			</svg>
		</span>
	</span>
</label>
```

```html|span-3
<label class="dc-input-checkbox">
	<input class="dc-input-checkbox__input" type="checkbox" checked disabled>
	<span class="dc-input-checkbox__indicator u-fx-center">
		<span class="dc-icon dc-input-checkbox__check">
			<svg class="dc-icon__svg">
				<use xlink:href="#checkmark" />
			</svg>
		</span>
	</span>
</label>
```

```html|span-3
<label class="dc-input-checkbox">
	<input class="dc-input-checkbox__input" type="checkbox" disabled>
	<span class="dc-input-checkbox__indicator u-fx-center">
		<span class="dc-icon dc-input-checkbox__check">
			<svg class="dc-icon__svg">
				<use xlink:href="#checkmark" />
			</svg>
		</span>
	</span>
	<span class="dc-input-checkbox__text">
		Checkbox Label
	</span>
</label>
```

```html|span-3
<label class="dc-input-checkbox">
	<input class="dc-input-checkbox__input" type="checkbox" disabled checked>
	<span class="dc-input-checkbox__indicator u-fx-center">
		<span class="dc-icon dc-input-checkbox__check">
			<svg class="dc-icon__svg">
				<use xlink:href="#checkmark" />
			</svg>
		</span>
	</span>
	<span class="dc-input-checkbox__text">
		Checkbox Label
	</span>
</label>
```

## Radio

```html|span-3
<label class="dc-input-radio">
	<input class="dc-input-radio__input" id="radio1" name="radio" type="radio">
	<span class="dc-input-radio__indicator u-fx-center"></span>
</label>

<label class="dc-input-radio u-spacing-t1">
	<input class="dc-input-radio__input" id="radio2" name="radio" type="radio">
	<span class="dc-input-radio__indicator u-fx-center"></span>
</label>
```

```html|span-3
<label class="dc-input-radio">
	<input class="dc-input-radio__input" id="radio1" name="radio" type="radio">
	<span class="dc-input-radio__indicator"></span>
	<span class="dc-input-radio__text">Radio Label</span>
</label>

<label class="dc-input-radio u-spacing-t1">
	<input class="dc-input-radio__input" id="radio2" name="radio" type="radio">
	<span class="dc-input-radio__indicator"></span>
	<span class="dc-input-radio__text">Radio Label</span>
</label>
```

## Radio with Error

```html|span-3
<div class="dc-has-error">
	<label class="dc-input-radio">
		<input class="dc-input-radio__input" id="radio1" name="radio" type="radio">
		<span class="dc-input-radio__indicator u-fx-center"></span>
	</label>
</div>

<label class="dc-input-radio u-spacing-t1">
	<input class="dc-input-radio__input" id="radio2" name="radio" type="radio">
	<span class="dc-input-radio__indicator u-fx-center"></span>
</label>
```

```html|span-3
<div class="dc-has-error">
	<label class="dc-input-radio">
		<input class="dc-input-radio__input" id="radio1" name="radio-label" type="radio">
		<span class="dc-input-radio__indicator"></span>
		<span class="dc-input-radio__text">
			Radio Label
		</span>
	</label>
</div>

<label class="dc-input-radio">
	<input class="dc-input-radio__input" id="radio2" name="radio-label" type="radio">
	<span class="dc-input-radio__indicator"></span>
	<span class="dc-input-radio__text">
		Radio Label
	</span>
</label>
```

## Radio Disabled

```html|span-3
<label class="dc-input-radio">
	<input class="dc-input-radio__input" id="radio1" name="radio" type="radio" disabled>
	<span class="dc-input-radio__indicator u-fx-center"></span>
</label>

<label class="dc-input-radio u-spacing-t1">
	<input class="dc-input-radio__input" id="radio2" name="radio" type="radio" disabled>
	<span class="dc-input-radio__indicator u-fx-center"></span>
</label>
```

```html|span-3
<label class="dc-input-radio">
	<input class="dc-input-radio__input" id="radio1" name="radio" type="radio" disabled>
	<span class="dc-input-radio__indicator"></span>
	<span class="dc-input-radio__text">Radio Label</span>
</label>

<label class="dc-input-radio u-spacing-t1">
	<input class="dc-input-radio__input" id="radio2" name="radio" type="radio" disabled>
	<span class="dc-input-radio__indicator"></span>
	<span class="dc-input-radio__text">Radio Label</span>
</label>
```

## Search

```html|span-3
<input type="search" placeholder="Search..." class="dc-input-search ">
```

## Toggle

```html|span-3
<div class="dc-toggle-switch">
	<span class="dc-toggle-switch__text">Lorem ipsum</span>
	<input class="dc-toggle-switch__input" type="checkbox" id="dc-toggle-switch__input">
	<label class="dc-toggle-switch__label" for="dc-toggle-switch__input"></label>
</div>
```