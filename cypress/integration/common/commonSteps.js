/// <reference types="Cypress" />
import {
  Then,
  And,
  When,
  Given,
  But,
} from "cypress-cucumber-preprocessor/steps";

Given(/^I should be in the \"([^\"]*)\" page$/, function (pageType) {
  switch (pageType) {
    case "greeKartHomepageUrl":
      cy.visit(Cypress.env("greeKartHomepageUrl"));
      break;

    default:
      console.log(`The visiting page "${pageType}" argument is not valid`);
  }
});

When(/^I click on element at \"([^\"]*)\", indexed at \"([^\"]*)\"$/, function (element, index) {
  cy.get(element).eq(index).click();
});

And(/^I click on element at \"([^\"]*)\", indexed at \"([^\"]*)\"$/, function (element, index) {
  cy.get(element).eq(index).click();
});

And(/^Validate the toast message \"([^\"]*)\" at element \"([^\"]*)\"$/, function (message, element) {
    cy.get(element).should('have.text', message);
});
