// / <reference types = "Cypress" />
import * as constant from '../../support/constants';
const {
    Before,
    After,
    Given,
    Then,
    And,
  } = require("cypress-cucumber-preprocessor/steps");
  

  Then(/^I add \"([^\"]*)\" of items of product \"([^\"]*)\"$/, function (numberOfProducts, addProduct) {
    let productName;
    
    cy.get(".products .product .product-name").each(($el, index, $list) => {
      productName = $el.text();
      
      if (productName.includes(addProduct)) {
        if (Number(numberOfProducts) === 1) {
          cy.get(".product-action button").eq(index).click();
        } else if (Number(numberOfProducts) > 1) {
          let tempCount = 0;
          while (tempCount < Number(numberOfProducts)) {
            cy.get(".product-action button").eq(index).click();
            tempCount++;
          }
        }
      }
    });
  });

  Then(/^I should be in the \"([^\"]*)\" checkOutpage$/, function (page) {
    cy.url().should('include', constant.appUrls[page]);
  });
  
  And(/^I enter the promoCode \"([^\"]*)\" at element \"([^\"]*)\", indexed at \"([^\"]*)\"$/, function (code, element, index) {
    cy.get(element).eq(index).type(code);
  });

  Then(/^Validate if there is discount of \"([^\"]*)\" percent obeserved in the product price at element \"([^\"]*)\"$/, function (percent, element) {
    cy.get(element).should('have.text', `${percent}%`);
  });
