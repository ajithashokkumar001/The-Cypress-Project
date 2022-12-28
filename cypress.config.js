const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
    
       // on('file:preprocessor', cucumber())

      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
        
    },
  },  
});

 
