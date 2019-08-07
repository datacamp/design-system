
## SCSS Import
`@import @datacamp/waffles-core/scss/components/table.scss`;

## HTML Usage
Tables for data. These base styles will require in-app customization for column widths.

## Base

```html
<table class="dc-table">
  <thead class="dc-table__thead">
    <tr>
      <th role="columnheader" aria-disabled="true" class="dc-table__th  ">
        <label class="dc-input-checkbox" for="checkbox-label-1">
          <input id="checkbox-label-1" class="dc-input-checkbox__input" type="checkbox">
          <span class="dc-input-checkbox__indicator u-fx-center">
            <span class="dc-icon dc-input-checkbox__check">
              <svg class="dc-icon__svg">
                <use xlink:href="#checkmark" />
              </svg>
            </span>
          </span>
        </label>
      </th>
      <th role="columnheader" aria-sort="none" class="dc-table__th" colspan="2">
        File Name
      </th>
      <th role="columnheader" aria-sort="none" class="dc-table__th">
        Uploaded At
      </th>
      <th role="columnheader" aria-sort="none" class="dc-table__th">
        File Type
      </th>
      <th role="columnheader" aria-sort="none" class="dc-table__th">
        File Size
      </th>
      <th role="columnheader" aria-disabled="true" class="dc-table__th"></th>
      <th role="columnheader" aria-disabled="true" class="dc-table__th"></th>
    </tr>
  </thead>
  <tbody class="dc-table__tbody">
    <tr class="dc-table__tr">
      <td class="dc-table__td">
        <label class="dc-input-checkbox" for="checkbox-label-2">
          <input id="checkbox-label-2" class="dc-input-checkbox__input" type="checkbox">
          <span class="dc-input-checkbox__indicator u-fx-center">
            <span class="dc-icon dc-input-checkbox__check">
              <svg class="dc-icon__svg">
                <use xlink:href="#checkmark" />
              </svg>
            </span>
          </span>
        </label>
      </td>
      <td class="dc-table__td dc-table__td--avatar">
        <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
      </td>
      <td class="dc-table__td">developer@datacamp.com</td>
      <td class="dc-table__td">22/01/2018 at 09:12 am</td>
      <td class="dc-table__td">Image</td>
      <td class="dc-table__td">72 kB</td>
      <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
        <svg class="dc-icon--primary" width="18" height="18">
          <use xlink:href="#download" />
        </svg>
      </td>
      <td class="dc-table__td">
        <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
      </td>
    </tr>
    <tr class="dc-table__tr">
      <td class="dc-table__td">
        <label class="dc-input-checkbox" for="checkbox-label-3">
          <input id="checkbox-label-3" class="dc-input-checkbox__input" type="checkbox">
          <span class="dc-input-checkbox__indicator u-fx-center">
            <span class="dc-icon dc-input-checkbox__check">
              <svg class="dc-icon__svg">
                <use xlink:href="#checkmark" />
              </svg>
            </span>
          </span>
        </label>
      </td>
      <td class="dc-table__td dc-table__td--avatar">
        <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
      </td>
      <td class="dc-table__td">developer@datacamp.com</td>
      <td class="dc-table__td">22/01/2018 at 09:12 am</td>
      <td class="dc-table__td">Image</td>
      <td class="dc-table__td">72 kB</td>
      <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
        <svg class="dc-icon--primary" width="18" height="18">
          <use xlink:href="#download" />
        </svg>
      </td>
      <td class="dc-table__td">
        <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
      </td>
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>
```

## Bordered
 
 
```html
<div class="dc-table-wrapper dc-table-wrapper--bordered">
  <table class="dc-table dc-table--white">
    <thead class="dc-table__thead">
      <tr>
        <th role="columnheader" aria-disabled="true" class="dc-table__th dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-1">
            <input id="checkbox-label-1" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th" colspan="2">
          File Name
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          Uploaded At
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          File Type
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          File Size
        </th>
        <th role="columnheader" aria-disabled="true" class="dc-table__th"></th>
        <th role="columnheader" aria-disabled="true" class="dc-table__th"></th>
      </tr>
    </thead>
    <tbody class="dc-table__tbody">
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-2">
            <input id="checkbox-label-2" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
       <td class="dc-table__td"
<td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-3">
            <input id="checkbox-label-3" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</div>
```

#### With Rows

```html
<div class="dc-table-wrapper dc-table-wrapper--bordered">
  <table class="dc-table dc-table--white dc-table--bordered">
    <thead class="dc-table__thead">
      <tr>
        <th role="columnheader" aria-disabled="true" class="dc-table__th dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-1">
            <input id="checkbox-label-1" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th" colspan="2">
          File Name
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          Uploaded At
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          File Type
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          File Size
        </th>
        <th role="columnheader" aria-disabled="true" class="dc-table__th"></th>
        <th role="columnheader" aria-disabled="true" class="dc-table__th"></th>
      </tr>
    </thead>
    <tbody class="dc-table__tbody">
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-2">
            <input id="checkbox-label-2" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-3">
            <input id="checkbox-label-3" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-4">
            <input id="checkbox-label-4" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-5">
            <input id="checkbox-label-5" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</div>
```

## Headless

```html
<div class="dc-table-wrapper">
  <table class="dc-table dc-table--headless">
    <thead class="dc-table__thead">
      <tr>
        <th role="columnheader" aria-disabled="true" class="dc-table__th dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-1">
            <input id="checkbox-label-1" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th" colspan="2">
          File Name
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          Uploaded At
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          File Type
        </th>
        <th role="columnheader" aria-sort="none" class="dc-table__th">
          File Size
        </th>
        <th role="columnheader" aria-disabled="true" class="dc-table__th"></th>
        <th role="columnheader" aria-disabled="true" class="dc-table__th"></th>
      </tr>
    </thead>
    <tbody class="dc-table__tbody">
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-2">
            <input id="checkbox-label-2" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-3">
            <input id="checkbox-label-3" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-4">
            <input id="checkbox-label-4" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
      <tr class="dc-table__tr">
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <label class="dc-input-checkbox" for="checkbox-label-5">
            <input id="checkbox-label-5" class="dc-input-checkbox__input" type="checkbox">
            <span class="dc-input-checkbox__indicator u-fx-center">
              <span class="dc-icon dc-input-checkbox__check">
                <svg class="dc-icon__svg">
                  <use xlink:href="#checkmark" />
                </svg>
              </span>
            </span>
          </label>
        </td>
        <td class="dc-table__td dc-table__td--avatar">
          <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
        </td>
        <td class="dc-table__td">developer@datacamp.com</td>
        <td class="dc-table__td">22/01/2018 at 09:12 am</td>
        <td class="dc-table__td">Image</td>
        <td class="dc-table__td">72 kB</td>
        <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
          <svg class="dc-icon--primary" width="18" height="18">
            <use xlink:href="#download" />
          </svg>
        </td>
        <td class="dc-table__td">
          <button class="dc-btn dc-btn--tertiary dc-btn--sm">Copy Link</button>
        </td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</div>
```

## Search

```html
<div class="dc-table--search">
  <div class="dc-table-header">
    <input type="search" placeholder="Search..." class="dc-input-search dc-u-w-100pc"> </div>
  <div class="dc-table-wrapper">
    <table class="dc-table">
      <tbody class="dc-table__tbody">
        <tr class="dc-table__tr">
          <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
            <label class="dc-input-checkbox" for="checkbox-label-2">
              <input id="checkbox-label-2" class="dc-input-checkbox__input" type="checkbox">
              <span class="dc-input-checkbox__indicator u-fx-center">
                <span class="dc-icon dc-input-checkbox__check">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#checkmark" />
                  </svg>
                </span>
              </span>
            </label>
          </td>
          <td class="dc-table__td dc-table__td--avatar">
            <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
          </td>
          <td class="dc-table__td">developer@datacamp.com</td>
          <td class="dc-table__td">22/01/2018 at 09:12 am</td>
          <td class="dc-table__td">Image</td>
          <td class="dc-table__td">72 kB</td>
          <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
            <a class="dc-btn--link" href="#">
              <span class="dc-icon dc-icon--size-12 dc-icon--primary dc-icon--flex">
                <svg class="dc-icon__svg">
                  <use xlink:href="#arrow_right" />
                </svg>
              </span> </a>
          </td>
        </tr>
        <tr class="dc-table__tr">
          <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
            <label class="dc-input-checkbox" for="checkbox-label-3">
              <input id="checkbox-label-3" class="dc-input-checkbox__input" type="checkbox">
              <span class="dc-input-checkbox__indicator u-fx-center">
                <span class="dc-icon dc-input-checkbox__check">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#checkmark" />
                  </svg>
                </span>
              </span>
            </label>
          </td>
          <td class="dc-table__td dc-table__td--avatar">
            <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
          </td>
          <td class="dc-table__td">developer@datacamp.com</td>
          <td class="dc-table__td">22/01/2018 at 09:12 am</td>
          <td class="dc-table__td">Image</td>
          <td class="dc-table__td">72 kB</td>
          <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
            <a class="dc-btn--link" href="#">
              <span class="dc-icon dc-icon--size-12 dc-icon--primary dc-icon--flex">
                <svg class="dc-icon__svg">
                  <use xlink:href="#arrow_right" />
                </svg>
              </span> </a>
          </td>
        </tr>
        <tr class="dc-table__tr">
          <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
            <label class="dc-input-checkbox" for="checkbox-label-4">
              <input id="checkbox-label-4" class="dc-input-checkbox__input" type="checkbox">
              <span class="dc-input-checkbox__indicator u-fx-center">
                <span class="dc-icon dc-input-checkbox__check">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#checkmark" />
                  </svg>
                </span>
              </span>
            </label>
          </td>
          <td class="dc-table__td dc-table__td--avatar">
            <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
          </td>
          <td class="dc-table__td">developer@datacamp.com</td>
          <td class="dc-table__td">22/01/2018 at 09:12 am</td>
          <td class="dc-table__td">Image</td>
          <td class="dc-table__td">72 kB</td>
          <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
            <a class="dc-btn--link" href="#">
              <span class="dc-icon dc-icon--size-12 dc-icon--primary dc-icon--flex">
                <svg class="dc-icon__svg">
                  <use xlink:href="#arrow_right" />
                </svg>
              </span> </a>
          </td>
        </tr>
        <tr class="dc-table__tr">
          <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
            <label class="dc-input-checkbox" for="checkbox-label-5">
              <input id="checkbox-label-5" class="dc-input-checkbox__input" type="checkbox">
              <span class="dc-input-checkbox__indicator u-fx-center">
                <span class="dc-icon dc-input-checkbox__check">
                  <svg class="dc-icon__svg">
                    <use xlink:href="#checkmark" />
                  </svg>
                </span>
              </span>
            </label>
          </td>
          <td class="dc-table__td dc-table__td--avatar">
            <img height="28" width="28" src="https://styleguide-assets.datacamp.com/images/core/components/image-file-uploader/placeholder-cbaf724d5e.svg">
          </td>
          <td class="dc-table__td">developer@datacamp.com</td>
          <td class="dc-table__td">22/01/2018 at 09:12 am</td>
          <td class="dc-table__td">Image</td>
          <td class="dc-table__td">72 kB</td>
          <td class="dc-table__td dc-table__td--shrink dc-table__td--icon">
            <a class="dc-btn--link" href="#">
              <span class="dc-icon dc-icon--size-12 dc-icon--primary dc-icon--flex">
                <svg class="dc-icon__svg">
                  <use xlink:href="#arrow_right" />
                </svg>
              </span> </a>
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</div>
```