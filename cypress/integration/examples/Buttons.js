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

describe('Different types of buttons', function()

{
    
  
  it('Visit the site and test static dropdowns', function()

    {
      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
    cy.get("select").select('option2').should('have.value', 'option2');

    cy.get("select").select('Select');//.should('have.value', 'Select');
    
    }),

  it('Now test the dynamic drop downs, checkboxes, radio buttons', function()
  
    {
      cy.get('#autocomplete').type('ind');
      cy.get('.ui-menu-item-wrapper').each(($e2,index,$list) => {

        if($e2.text()==='India'){

          $e2.click();
       }

    })

    // now check option1 checkbox and validate
    // now check the remaning checkboxes and validate, if the other two checks got checked

     cy.get('#checkBoxOption1').check().should('be.checked');
     cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

     cy.get('input[type="checkbox"]').check();
    

    // select the radio buttons

    cy.get('input[value="radio1"]').check();

  
  }  
  ),

  it('Test Visible and non-Visible elements', function(){
     
    cy.get('input[value="Hide"]').click();
    cy.get('#displayed-text').should('not.be.visible');
    cy.get('input[value="Show"]').click();
    cy.get('#displayed-text').should('be.visible');





  }
  
  
  
  
  
  
  )

  
})

