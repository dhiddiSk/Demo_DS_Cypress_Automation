/// <reference types="Cypress" />

/*
Plan step by step: 
-1 Add the mobiles to the cart, where the names of the mobiles are taken from the DummyData.json file
-2 Click on the checkout button
-3 Increase the quntity of the iphone in the checkout page
-4 validate if the amount has been reduced
-5 Now click on remove on any one of the mobile phone
-6 validate the total amount of the price
-7 Click on checkout button
-8 Enter the location from DummyData.json file and select that particular dropdown location
-9 Check the checkbox
-10 Click on purchase and validate the success text appeared on the screen.
*/


describe('This testsuite is used to shop the mobiles', function(){

    // runs once before all tests in the block
    before(function() {
        cy.fixture('mobileshoppingdata').then(function(shopdata)
        {
            this.shopdata=shopdata
        })
     }),

    it('Visit the site, add the mobiles to the cart, click on the checkoutbutton', function(){ 
        
        cy.visit(this.shopdata.shopurl)
        
        var phonesArray = []
        
        phonesArray = this.shopdata.phones
        
        cy.get('.card-title').find('a').each(($element, index, $list) => {
    
        if(phonesArray.includes($element.text())){
    
            cy.get('.btn.btn-info').eq(index).click()
    
        }
          })
    
        cy.get('.nav-link.btn.btn-primary').click();

    }),

    it('Validate the prices displyed in checkout page', function() {

        // Iterate through each of the product in the checkout page and validate the prices and total prices
        
        cy.get('.media-body h4 a').each(($element, index, $list) =>{
                 
             //****tbody :nth-child(3) > strong
                         
           cy.get('tr td:nth-child(3) >strong').eq(index).then(function(value){

                    // the values are collected here
            console.log(value.text());
           


           })
            })
       }),

        // Increase the qunatity by one of each phone and validate the total price of product and total price of all the product

    it('remove the nokia phone and validate the prices', function(){

        var phonesArray = []
        
        phonesArray = this.shopdata.phones
        //remove the product as per the json data and validate the total price of the products

        cy.get('.card-title').find('a').each(($element, index, $list) => {
    
            //here first get the total price and nokia edge total price and comapre the values.
            
            
            if($element.text() === phonesArray[2]){
        
                cy.get('.btn.btn-danger').eq(index).click()
        
            }






              })






    }),


    it('Click on chekout, enter the delivery location, check the checkbox, click on purchase, validate the success text', function(){


        // Now click on the checkout button, enter the place as per json data, check the check box, click on purchase, now validate the success message as per the json data 


        cy.get('.btn.btn-success').click()




    })

})

