## SCSS Import
`@import @datacamp/waffles-core/scss/components/tabs.scss`;

## HTML Usage
Legacy navigation ported for reuse in multiple apps. Each of your tabs requires a unique `id` on the page. Add this `id` as the href to each tab hyperlink to toggle their visibility. 

```hint
In HTML-based front-end apps, the `active` class needs to be toggled.
```

## Base

```html|show-source
<div class="minimal-tabs-bar">
  <ul class="minimal-tabs list-unstyled" role="tablist">
    <li class="minimal-tab active">
      <a class="minimal-tab__link" href="#in-progress" aria-controls="in-progress" role="tab" data-toggle="tab" data-text="Courses in Progress (2)">Courses in Progress (2)</a>
    </li>
    <li class="minimal-tab">
      <a class="minimal-tab__link" href="#completed" aria-controls="completed" role="tab" data-toggle="tab" data-text="Completed (4)">Completed (4)</a>
    </li>
  </ul>
</div>

<div class="minimal-tab-pane tab-pane pt-md active" role="tabpanel" id="in-progress">
  <p>In progress tab content</p>
</div>

<div class="minimal-tab-pane tab-pane pt-md" role="tabpanel" id="completed">
  <p>Completed tab content</p>
</div>
```

#### Modifier
A tab bar can have an optional action link which will be aligned to the right.

```html
<div class="minimal-tabs-bar">
  <ul class="minimal-tabs list-unstyled" role="tablist">
    <li class="minimal-tab active">
      <a class="minimal-tab__link" href="#in-progress" aria-controls="in-progress" role="tab" data-toggle="tab" data-text="Courses in Progress (2)">Courses in Progress (2)</a>
    </li>
    <li class="minimal-tab">
      <a class="minimal-tab__link" href="#completed" aria-controls="completed" role="tab" data-toggle="tab" data-text="Completed (4)">Completed (4)</a>
    </li>
  </ul>
  <a class="minimal-tabs__action" href="#">
    <img class="minimal-tabs__action-icon" src="https://cdn.datacamp.com/main-app/assets/icons/explore-courses-library-icon-898485ab5575f7b3809b188d7f97820a122ccc72171191badf81c72d3e0b74a6.svg" alt="Explore courses library icon">
    Explore Course Library
  </a>
</div>

<div class="minimal-tab-pane tab-pane pt-md active" role="tabpanel" id="in-progress">
  <p>In progress tab content</p>
</div>

<div class="minimal-tab-pane tab-pane pt-md" role="tabpanel" id="completed">
  <p>Completed tab content</p>
</div>
```
