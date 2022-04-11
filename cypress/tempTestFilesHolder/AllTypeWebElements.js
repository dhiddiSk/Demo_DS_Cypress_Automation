/// <reference types="Cypress" />

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

