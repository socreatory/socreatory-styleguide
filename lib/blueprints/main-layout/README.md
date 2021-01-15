title: Main Layout
description: Provides a layout component for the main content area

This component provides layout styling for the `main` element which provides one basic page layout.

To create different layouts of this main content area in the future it is best to
create a different CSS class.

In this layout, we expect the following elements to be included as children:

* `PageCategory` component with the page category
* An `h1` element containing the page title
* A `ButtonGroup` component containing any actions relevant for the page

Following these elements, you can treat this component like a generic container:
Any other elements will be placed in a single column in the content area.

## Mobile Viewport

```html width=350
<div style="background-color: var(--background-color);">
  <main class="main-layout">
    <div class="page-category">Rechnungserstellung</div>
    <h1>Keine freizugebenden Leistungen</h1>
    <div class="button-group"><button class="button tertiary" type="submit">Faule erinnern</button><button class="button primary" type="submit">Neue Rechnung</button></div>
    <div style="background-color: var(--brand-blue); color: white; min-height: 10rem;">Main content comes here!</div>
  </main>
</div>
```

## Larger Viewports

```html
<div style="background-color: var(--background-color);">
  <main class="main-layout">
    <div class="page-category">Rechnungserstellung</div>
    <h1>Keine freizugebenden Leistungen</h1>
    <div class="button-group"><button class="button tertiary" type="submit">Faule erinnern</button><button class="button primary" type="submit">Neue Rechnung</button></div>
    <div style="background-color: var(--brand-blue); color: white; min-height: 10rem;">Main content comes here!</div>
  </main>
</div>
```
