title: Button
description: All of the Button variants

A Button always has many variants.

## Usability: Should I use a link or a button?

In the application, it is a best practice to use a Link style to represent a link when really linking between static resources.
However, when the link is actually a _call-to-action_ and by clicking on the link the user will perform an action in the next step,
this is a good time to use a `Button` style on the link itself.

## Button

Your base button is here.

### Buttons of type "submit"

The primary variant:

```html
<button class="button primary" type="submit">Submit a form</button>
```

The secondary variant:

```html
<button class="button secondary" type="submit">Submit a form</button>
```

The tertiary variant:

```html
<button class="button tertiary" type="submit">Submit a form</button>
```

### Buttons of type "button"

The primary variant:

```html
<button class="button primary" type="button">Perform a custom action</button>
```

The secondary variant:

```html
<button class="button secondary" type="button">Perform a custom action</button>
```

The tertiary variant:

```html
<button class="button tertiary" type="button">Perform a custom action</button>
```

## LinkButton

Here we can use the `LinkButton` component to create a button which is actually a link to another resource.
Below the CSS this is a normal `a` tag.
This accepts an `href` as a parameter.

### Variant 'primary'

```html
<a class="button primary" href="#">Go somewhere special!</a>
```

### Variant 'secondary'

```html
<a class="button secondary" href="#">Go somewhere not so special!</a>
```

### Variant 'tertiary'

```html
<a class="button tertiary" href="#">Go somewhere else!</a>
```
