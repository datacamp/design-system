## SCSS Import
`@import @datacamp/waffles-core/scss/components/popver.scss`;

## HTML Usage
We use [Bootstrap's Popover JS](http://getbootstrap.com/javascript/#popovers) for the popover in HTML-based front-ends. 

```hint
Dependencies: Bootstrap `tooltip.js` and `popover.js`
```

## Options
The placement and trigger type are set by data-attributes.

#### Placement
`data-placement={top|right|bottom|left}`                  

```html|show-source,span-3
<button type="button" class="dc-btn dc-btn--primary-light popover-trigger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-placement="top" data-trigger="focus">Popover on top</button>
```

```html|show-source,span-3
<button type="button" class="dc-btn dc-btn--primary-light popover-trigger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-placement="bottom" data-trigger="focus">Popover on bottom</button>
```

```html|show-source,span-3
<button type="button" class="dc-btn dc-btn--primary-light popover-trigger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-placement="left" data-trigger="focus">Popover on left</button>
```

```html|show-source,span-3
<button type="button" class="dc-btn dc-btn--primary-light popover-trigger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-placement="right" data-trigger="focus">Popover on right</button>
```

#### Trigger
`data-trigger={focus|hover}` 

```html|show-source,span-3
<button type="button" class="dc-btn dc-btn--primary-light popover-trigger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-placement="top" data-trigger="focus">Popover on focus</button>
```

```html|show-source,span-3
<button type="button" class="dc-btn dc-btn--primary-light popover-trigger" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-placement="bottom" data-trigger="hover">Popover on hover</button>
```

## Modifiers

#### Primary
Content with the `dc-primary` background color.

```html|show-source
<button type="button" class="dc-btn dc-btn--primary-light popover-trigger popover-trigger--primary" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-placement="top" data-trigger="focus">Popover on top</button>
```

#### Primary
Content with the `dc-primary-dark` background color.

```html|show-source
<button type="button" class="dc-btn dc-btn--primary-light popover-trigger popover-trigger--primary-dark" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-placement="top" data-trigger="focus">Popover on top</button>
```