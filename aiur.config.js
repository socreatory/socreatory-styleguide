module.exports = {
  title: "Software Creators' Masterclass Style Guide",
  language: "en",
  description: "Styleguide Software Creators' Masterclass",

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
        home: "./lib/views/home/home.md",
        home_test: "./lib/views/home/home_test.md",
        training_overview: "./lib/views/trainings_overview/trainings_overview.md",
        training_detail: "./lib/views/trainings/show.md",
        training_detail_isaqb: "./lib/views/trainings/show_isaqb.md",
        about_us: "./lib/views/about/about.md",
        trainer_overview: "./lib/views/trainer/trainer_overview.md",
        trainer_detail: "./lib/views/trainer/trainer_detail.md",
        isaqb: "./lib/views/isaqb/isaqb.md",
        prices: "./lib/views/prices/prices.md",
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
      {
        source: "./lib/assets/fonts",
        target: "./fonts",
      },
    ],
  },

  watchDirs: ["./lib"],
};
