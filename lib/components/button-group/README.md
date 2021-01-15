title: Button Group
description: A flexible button container that adapts to the amount of space that it has.

This ButtonGroup component wraps around a few different buttons and determines spacing based on the amount of space available for the component

## Normal viewport

This shows you what the component looks like in your current viewport

```html
<div class="button-group">
  <button class="button tertiary" type="submit">Faule Schweine erinnern</button>
  <button class="button primary" type="submit">Neue Rechnung</button>
</div>
```

## Small viewport

When the buttons do not have enough space to be placed next to each other they wrap onto the next line.

Wrapping behavior as a default is a _good thing_.
If you need the buttons to all line up on the same line,
combine this with different approaches.

```html width="320"
<div class="button-group">
  <button class="button tertiary" type="submit">Faule Schweine erinnern</button>
  <button class="button primary" type="submit">Neue Rechnung</button>
</div>
```

## Use a shorter label if you need to have it be placed on the same line!

If you

```html width="320"
<div class="button-group">
  <button class="button tertiary" type="submit">Faule erinnern</button>
  <button class="button primary" type="submit">Neue Rechnung</button>
</div>
```
