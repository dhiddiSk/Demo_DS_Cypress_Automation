/// <reference types="Cypress" />

const { props } = require("cypress/types/bluebird");

/*
Plan: 1) Enter the details in the Name, Email, password fields, check the check box, enter the gender, select the status, Enter the date of birth,
, clcik on submit

2) perform two way data binding validation, validate the radio buttons or check boxes.
*/

describe("Test suite for filling up the form", function() {
    
   
   it("Test for entering the name, email, password and validate the two way binding", function() {

     // here the fixture automatically provides itself the path to the data. 
     cy.fixture(DummyData).then(function(data) {

        this.dummydata = data
        
    }
        

    )   
    
    
    cy.visit(Cypress.env('formUrl'));

       cy.get("input[minlength='2']").type(this.dummydata.name)

       cy.get("input[name='email]").type(this.dummydata.email)

       cy.get("#exampleInputPassword1").type(this.dummydata.password)
       
        //validate the name input with two way data binding.

       cy.get(".ng-pristine.ng-valid.ng-touched").should('have.value', this.dummydata.name)


       

       




        
    }



    )





})