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
        invoices_overview: "./lib/views/invoices-overview.md",
      },
    },

    blueprints: {
      file: "./lib/documentation/BLUEPRINTS.md",
      children: {
        navbar_layout: "./lib/blueprints/navbar-layout/README.md",
        main_layout: "./lib/blueprints/main-layout/README.md",
      },
    },

    organisms: {
      file: "./lib/documentation/ORGANISMS.md",
      children: {
        navbar: "./lib/components/navbar/README.md",
      },
    },

    molecules: {
      file: "./lib/documentation/MOLECULES.md",
      children: {
        button_group: "./lib/components/button-group/README.md",
      },
    },

    atoms: {
      file: "./lib/documentation/ATOMS.md",
      children: {
        headings: "./lib/components/headings/README.md",
        link: "./lib/components/link/README.md",
        button: "./lib/components/button/README.md",
        icon: "./lib/components/icon/README.md",
        text: "./lib/components/text/README.md",
      },
    },
  },

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
