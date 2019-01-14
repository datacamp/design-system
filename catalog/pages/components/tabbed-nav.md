## SCSS Import
`@import @datacamp/waffles-core/scss/components/tabbed-nav.scss`;

## HTML Usage
Legacy nav style, ported for use in multiple apps. 

```hint
This needs a responsive refactor as it breaks down with over 4 links. 
```

## Base
The `is-active` class needs to be toggled with JS in HTML-based front-end apps.

```html|show-source
<ul class="dc-tabbed-nav">
  <li class="dc-tabbed-nav__item">
    <a class="dc-tabbed-nav__link" href="#">Admin</a>
  </li>
  <li class="dc-tabbed-nav__item">
    <a class="dc-tabbed-nav__link is-active" href="#">Billing</a>
  </li>
  <li class="dc-tabbed-nav__item">
    <a class="dc-tabbed-nav__link" href="#">Invoice settings</a>
  </li>
  <li class="dc-tabbed-nav__item">
    <a class="dc-tabbed-nav__link" href="#">Integrations</a>
  </li>
  <li class="dc-tabbed-nav__item">
    <a class="dc-tabbed-nav__link" href="#">Invite links</a>
  </li>
  <li class="dc-tabbed-nav__item">
    <a class="dc-tabbed-nav__link" href="#">Remove members</a>
  </li>
  <li class="dc-tabbed-nav__item">
    <a class="dc-tabbed-nav__link" href="#">Privacy</a>
  </li>
</ul>
```