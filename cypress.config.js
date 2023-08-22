const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://interline.tudoazul.com/',
    "viewportWidth": 1024,
    "viewportHeight": 768,
    hideXHRInCommandLog: true
  },
});
