/// <reference types="Cypress" />
import {
  Then,
  And,
  When,
  Given,
  But,
} from "cypress-cucumber-preprocessor/steps";

Given(
  /^I should be in the \"([^\"]*)\" shopping homepage$/,
  function (pageType) {
    switch (pageType) {
      case "greeKartHomepageUrl":
        cy.visit(Cypress.env("greeKartHomepageUrl"));

      default:
        console.log(`The visiting page "${pageType}" argument is not valid`);
    }
  }
);
