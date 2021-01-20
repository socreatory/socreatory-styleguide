module.exports = {
  title: "Software Creators' Masterclass Style Guide",
  language: "en",
  description: "Styleguide oftware Creators' Masterclass",

  pages: {
    "": "./lib/documentation/README.md",

    basics: {
      file: "./lib/documentation/BASICS.md",
      children: {
        breakpoints: "./lib/documentation/breakpoints.md",
        colors: "./lib/documentation/colors.md",
        spacers: "./lib/documentation/spacers.md",
      },
    },

    views: {
      file: "./lib/documentation/VIEWS.md",
      children: {
        example_view: "./lib/views/example-view.md",
      },
    },

    blueprints: {
      file: "./lib/documentation/BLUEPRINTS.md",
      children: {
        example_layout_layout: "./lib/blueprints/example-layout/README.md",
      },
    },

    organisms: {
      file: "./lib/documentation/ORGANISMS.md",
      children: {
      },
    },

    molecules: {
      file: "./lib/documentation/MOLECULES.md",
      children: {
      },
    },

    atoms: {
      file: "./lib/documentation/ATOMS.md",
      children: {
        headings: "./lib/components/headings/README.md",
        link: "./lib/components/link/README.md",
        icons: "./lib/components/icons/README.md",
        text: "./lib/components/text/README.md",
      },
    },
  },

  // Don't edit the following lines
  snippetAssets: {
    js: [
      {
        source: "./lib/assets/javascripts/application.js",
        target: "./application.js",
      },
    ],
    sass: [
      {
        source: "./lib/assets/stylesheets/application.scss",
        target: "./application.css",
      },
      {
        source: "./lib/assets/stylesheets/styleguide.scss",
        target: "./styleguide.css",
      },
    ],
    static: [
      {
        source: "./lib/assets/images",
        target: "./images",
      },
    ],
  },

  watchDirs: ["./lib"],
};
