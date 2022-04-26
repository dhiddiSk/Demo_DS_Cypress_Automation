/// <reference types="Cypress" />
import {
  Then,
  And,
  When,
  Given,
  But,
} from "cypress-cucumber-preprocessor/steps";

Given(/^I should be in the \"([^\"]*)\" homepage$/, function (pageType) {
  switch (pageType) {
    case "greeKartHomepageUrl":
      cy.visit(Cypress.env("greeKartHomepageUrl"));
      break;

    default:
      console.log(`The visiting page "${pageType}" argument is not valid`);
  }
});

And(/^I click on the \"([^\"]*)\"$/, function (element) {
  cy.get(element).click();
});
