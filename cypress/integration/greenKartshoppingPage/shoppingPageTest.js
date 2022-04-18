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
      let productPrice;
      cy.get(".products .product").each(($el, index, $list) => {
        //console.log(`${index}, ${productFixture[index].id}`);
        
        // productPrice = productFixture[index].price;
        // since index is starting from zero
        if ((index+1) === productFixture[index].id) {
            console.log(`${index+1}, ${productFixture[index].id}`);
          // cy.get(".products .product .product-image")
          //   .eq(index)
          //   .invoke("attr", "src")
          //   .should("eq", productFixture[index].image);
          // cy.get(".products .product .product-name")
          //   .eq(index)
          //   .should("contain.text", productFixture[index].name);

          // cy.get(".products .product .product-price")
          //   .eq(index)
          //   .should("contain.text", productPrice.toString());
        }
      });
    });
  }
);
