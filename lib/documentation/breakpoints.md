title: Breakpoints
description: these breakpoint variables are available in Sass.

In your SCSS file, import the following:

    @use "../../fundamentals/breakpoints" as breakpoints;

Adapted from: [freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/](https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/)

## Available breakpoints

    $breakpoint-phone: 35rem; /* 560px */
    $tablet-portrait: 40rem;
    $tablet-landscape: 60rem;
    $desktop: 75rem;

## Mixins

There are three Mixins provided. We follow the mobile first principle and start with the styling for smaller screens / sttyling that fits all screen sizes and add breakpoints for bigger screens whren needed. Please use breakpoints as little es possible.

### Tablet portrait and greater

    @include breakpoints.for-tablet-portrait-up {
      // Add selectors here

}

### Tablet landscape and greater

    @include breakpoints.for-tablet-landscape-up {
      // Add selectors here

}

### Desktop size and greater

    @include breakpoints.for-desktop-up {
      // Add selectors here

}
