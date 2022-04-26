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

Then(/^I clear the search bar$/, function () {
  cy.get('input[type = "search"]').clear();
});

Then(
  /^I enter the search (.+) word at element \"([^\"]*)\" and validate if all the products displayed contains the entered key.$/,
  function (key, element) {
    cy.get(element).type(key);

    // now go through each product name and validate if the string contains this key
    let productName;
    cy.get(".products .product .product-name").each(($el, index, $list) => {
      productName = $el.text();
      expect(productName.includes(key.toString()));
    });
  }
);

Then(
  /^I add (.+) of items of this (.+)$/,
  function (numberOfProducts, addProduct) {
    let productName;
    
    cy.get(".products .product .product-name").each(($el, index, $list) => {
      productName = $el.text();
      
      if (productName.includes(addProduct)) {
        if (Number(numberOfProducts) === 1) {
          console.log(productName);
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
  }
);

Then(
  /^Validate if the correct number (.+) of (.+) are added to the cart and money charged accordingly$/,
  function (no, products) {
    // validate if correct product has been added.
    cy.get(".cart-items .cart-item .product-name").eq(0).should(($element) => {
      const cartItemText = $element.text();
      expect(cartItemText).to.include(products);
    });

    let numberOfItems;

    // validate if number of products are added correctly to cart.
    cy.get(".cart-items .cart-item .product-total .quantity").eq(0).should(
      ($element) => {
        let numberOfItemsText = $element.text().toString();
        console.log(`These are the number of items ${numberOfItemsText}`);
        let indexNumber = numberOfItemsText.indexOf('N');
        numberOfItems = numberOfItemsText.slice(0, indexNumber - 1);
        expect(no).to.equal(numberOfItems);
      }
    );

    let totalPrice;

    // validate if the amount charged for the products is correct.
    cy.get(".cart-items .cart-item .product-price").eq(0).should(($element) => {
      let productPrice = Number($element.text());
      totalPrice = productPrice * Number(numberOfItems);
    });


    cy.get(".cart-items .cart-item .product-total .amount").eq(0).should(
      ($element) => {
        expect(totalPrice).to.equal(Number($element.text()));
      }
    );
  }
);
