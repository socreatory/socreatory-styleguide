# socreatory Styleguide

This is the style guide for socreatory. It contains all UI components and documentation for how to use them.
The style guide is running on [aiur](]https://github.com/moonglum/aiur), a tool to generate style guides with a focus on pattern libraries. It is still work in progress and will be updated during the work on this style guide.

## Local setup

[Install Node.js](https://nodejs.org/en/download/)

In this directory run:

```
npm i
```

Now you need to run:

```
npm start
```

Visit http://localhost:4001 to visit the pattern library.

## Run all the tests

`npm run test` runs eslint and stylelint

`npm run prettier` runs prettier

`stylelint './lib/**/*.scss' --fix` autofixes stylelint errors if possible
