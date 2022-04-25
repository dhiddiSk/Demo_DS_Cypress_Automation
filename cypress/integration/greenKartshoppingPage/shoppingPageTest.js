// / <reference types = "Cypress" />
const {
  Before,
  After,
  Given,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");

Then(
  /^I go through each product and validate the presence and their corresponding data that includes image, price, order, category.$/,
  function () {
    // log the data to the console.
    cy.fixture("GreenKartTestData").then((productFixture) => {
      // let productPrice;
      cy.get(".products .product").each(($el, index, $list) => {
        
        
        // Assert the validation of product image.
        cy.get(".products .product .product-image img")
          .eq(index)
          .should("have.attr", "src", productFixture[index].image);

        // Assert the validation of the product name.
        cy.get(".products .product .product-name")
          .eq(index)
          .should("contain.text", productFixture[index].name);

        // Assert the validation of the product price.
        cy.get(".products .product .product-price")
          .eq(index)
          .should("contain.text", productFixture[index].price.toString());
      });
    });
  }
);
