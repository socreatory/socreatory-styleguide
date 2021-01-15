module.exports = {
  js: [
    {
      source: "./lib/assets/javascripts/application.js",
      target: "./public/assets/javascripts/application.js",
    },
  ],

  sass: [
    {
      source: "./lib/assets/stylesheets/application.scss",
      target: "./public/assets/stylesheets/application.css",
    },
  ],

  static: [
    {
      source: "./lib/assets/images",
      target: "./public/assets/images",
    },
  ],

  manifest: {
    target: "./public/assets/manifest.json",
    key: "short",
    webRoot: "./public",
  },

  watchDirs: ["./lib"],
};
