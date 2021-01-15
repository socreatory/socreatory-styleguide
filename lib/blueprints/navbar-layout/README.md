title: Navbar Layout
description: Providing a consistent Navbar and Layout

This component actually consists of two separate components which work together:

the `NavbarLayout` provides a container into which the `Navbar` and any other content can be placed.

The reason for this constellation is that `NavbarLayout` uses CSS grid to decide on the position of the `Navbar` and it's width.

`NavbarLayout` expects the following HTML children:

-   A navbar component that is annotated with the class `navbar`
-   The main content that will be placed in the main content area

It will be adjusted responsively based on the size of the viewport.

### Mobile Viewport

```html width=320
<div class="navbar-layout">
    <div class="navbar">
        <p style="color: white;">This is the region for the navbar.</p>
    </div>
    <main style="height: 300px; background-color: var(--background-color);">
        This is the region for the main content area.
    </main>
</div>
```

### Responsive Behavior

```html
<div class="navbar-layout">
    <div class="navbar">
        <p style="color: white;">This is the region for the navbar.</p>
    </div>
    <main style="height: 300px; background-color: var(--background-color);">
        This is the region for the main content area.
    </main>
</div>
```
