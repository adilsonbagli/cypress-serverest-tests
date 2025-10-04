const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // URL padrão para testes de Frontend
    baseUrl: "https://front.serverest.dev",

    setupNodeEvents(on, config) {
      return config;
    },

    video: true,
    screenshotOnRunFailure: true,
  },

  env: {
    // URL para testes da API
    apiUrl: "https://serverest.dev",
  },
});
