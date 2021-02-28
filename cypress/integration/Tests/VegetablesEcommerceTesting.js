/// <reference types="Cypress" />

/*
Plan step by step: 
-1 Search the vegetables in search bar and add them to the cart. 
-2 write an assertion on total number of items taken
-3 Click on the bag Icon and proceed to checkout
-4 Enter the text of promocode
-5 Click on apply and then click on place order
-6 Select the country in the dropdown of next page
-7 Check the check box of term's and conditions
-8 Click on the proceed button,
-9 Validate the text in that button
-10 Click on place order in the next page
*/

describe('Shop the vegetables and checkout testsuite', function()

{
    
  
  it('Visit the site and search for vegetables', function()

    {
      
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
    cy.get(".search-keyword").type("br");

    cy.wait(3000);
    
    cy.get('.products').find('.product').each(($el, index, $list) => {
    
    if($el.find('h4.product-name').text().includes("Brinjal") || $el.find('h4.product-name').text().includes("Brocolli")){

        $el.find("button[type=button]").click();

    }
      })
})

,it('Validate the number of items to two, then remove the brinjal vegetable from the bag. Next proceed to next stage', function()
  {

  //To validate the total number of items in the bag.
    cy.get('.cart-count').should('have.text', '2');

    cy.get('img[alt="Cart"]').click();

    cy.wait(2000);

    // now validate the vegetables present in the cart and then remove the brinjal from the cart by clicking on the cross button
    
    // cy.get('.cart-items').find('.cart-item').each(($e1, index, $list) => {


    //   if($e1.find('.product-name').text().includes("Brinjal")){

    //     // facing trouble here, so I will solve this in the near future.

    //     // $e1.find('.product-remove:visible').then(function(crossButton) {

    //     //     cy.crossButton.click();
          
    //     }//)
    //  }
  
  
    cy.contains('PROCEED TO CHECKOUT').click();

    cy.wait(3000);

    //cy.get('.promoCode').type("")

    cy.contains('Place Order').click();
  
  
  })

 
})






