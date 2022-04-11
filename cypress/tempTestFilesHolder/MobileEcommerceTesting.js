/// <reference types="Cypress" />

/*
Plan step by step: 
-1 Add the mobiles to the cart, where the names of the mobiles are taken from the mobileshoppingdata.json file
-2 Click on the checkout button
-3 Validate the displayed prices of phones and the total prices with the actual ones in the mobileshoppingdata.json file
-4 Increase the quantity of the iphone in the checkout page and validate the total price
-5 Now click on remove on any one of the mobile phone
-6 Now validate if the of that particular phone and the total value has been reduced
-7 Click on checkout button
-8 Enter the location from DummyData.json file and select that particular dropdown location
-9 Check the checkbox
-10 Click on purchase and validate the success text appeared on the screen.
*/
 



describe('This testsuite is to test shopping of mobiles', function(){
  var shopdata;
 
 

    // runs once before all tests in the block
    before(function() {
        cy.fixture('mobileshoppingdata').then(function(shopdatainput)
        {
            shopdata = shopdatainput;

        })
    }),

    it('Visit the site, add the mobiles to the cart, click on the checkoutbutton', function(){ 
        
        cy.visit(shopdata.shopurl);
       
        var phonesArray = [];
        
        phonesArray = shopdata.phones;

        cy.get('.card-title').find('a').each(($element, index, $list) => {
    
        if(phonesArray.includes($element.text())){
    
            cy.get('.btn.btn-info').eq(index).click();
    
        }
        })
    
        cy.get('.nav-link.btn.btn-primary').click();

    }),

    it('Validate the prices displayed in checkout page', function() {

        // Iterate through each of the product in the checkout page and validate the prices and total prices
        var productName, displayedPhoneValueWithCurrencySign, temp, temp2, temp3, displayedPhoneValueOnlyNumeric, itemTotalVlaue = 0, displayedPhoneTotalValueWithCurrencySign;
        cy.get('.media-body h4 a').each(($element, index, $list) =>{
                 
             //****tbody :nth-child(3) > strong
                
             cy.get('tr td:nth-child(3) >strong').eq(index).then(function(value){

                productName = $element.text();
                
               // console.log(index);
               // console.log(productName);    
                
                displayedPhoneValueWithCurrencySign = value.text();
                temp = displayedPhoneValueWithCurrencySign.split(" ");
                displayedPhoneValueOnlyNumeric = temp[1].trim();
                var phonePriceFromImportedDataFile = shopdata[productName];
                //console.log(phonePriceFromImportedDataFile);
                expect(Number(displayedPhoneValueOnlyNumeric)).to.equal(phonePriceFromImportedDataFile);
                
                })


             cy.get('tr td:nth-child(4) >strong').eq(index).then(function(itemValue){

                displayedPhoneTotalValueWithCurrencySign = itemValue.text();

                temp2 = displayedPhoneTotalValueWithCurrencySign.split(" ");

                displayedPhoneTotalValueWithCurrencySign = temp2[1].trim();

                itemTotalVlaue += Number(displayedPhoneTotalValueWithCurrencySign);

                })

            
            




            })

            //validate the total price of all the mobles tp the total price of cart

            cy.get('h3 > strong').then(function(cartValue){
                var displayedCartTotalValueWithCurrencySign = cartValue.text();
                
                temp3 = displayedCartTotalValueWithCurrencySign.split(" ");

                displayedCartTotalValueWithCurrencySign = temp3[1].trim();

                expect(Number(displayedCartTotalValueWithCurrencySign)).to.equal(itemTotalVlaue);

            })

            



       }),

       it('Increase the quantity of the mobiles and validate the prices displayed in checkout page', function() {

    //    var temp4, displayedCartTotalValueWithCurrencySign
    //         //increase the quantity as per the mobileshoppingdata.json 
       
            // cy.get('#exampleInputEmail1').each(($count, index, $list) => {
    
            //     // verify if the count is not matching with what we have in the data file
            //     if(Number($count.text()).includes(shopdata.QuantityIncrease)){

            //         cy.get('#exampleInputEmail1').eq(index).type(shopdata.QuantityIncrease[index]);
            //     }
                
                
                



                })












            
       
       
        // Iterate through each of the product in the checkout page and validate the prices and total prices
       
        var productName, displayedPhoneValueWithCurrencySign, temp, displayedPhoneValueOnlyNumeric;
        cy.get('.media-body h4 a').each(($element, index, $list) =>{
                 
             //****tbody :nth-child(3) > strong
                
             cy.get('tr td:nth-child(3) >strong').eq(index).then(function(value){

                productName = $element.text();
                
                console.log(index);
                console.log(productName);    
                
                displayedPhoneValueWithCurrencySign = value.text();
                temp = displayedPhoneValueWithCurrencySign.split(" ");
                displayedPhoneValueOnlyNumeric = temp[1].trim();
                var phonePriceFromImportedDataFile = shopdata[productName];
                console.log(phonePriceFromImportedDataFile);
                //console.log(phonePriceFromImportedDataFile+"Thie is the number")
                expect(Number(displayedPhoneValueOnlyNumeric)).to.equal(phonePriceFromImportedDataFile);
                
                })
            })
       }),









        // Increase the qunatity by one of each phone and validate the total price of product and total price of all the product

    it('remove the nokia phone and validate the prices', function(){

        var phonesArray = [];
        
        phonesArray = shopdata.phones;
        //remove the product as per the json data and validate the total price of the products

        cy.get('.card-title').find('a').each(($element, index, $list) => {
    
            //here first get the total price and nokia edge total price and comapre the values.
            
            
            if($element.text() === phonesArray[2]){
        
                cy.get('.btn.btn-danger').eq(index).click();
        
            }






              })






    }),


    it('Click on chekout, enter the delivery location, check the checkbox, click on purchase, validate the success text', function(){


        // Now click on the checkout button, enter the place as per json data, check the check box, click on purchase, now validate the success message as per the json data 


        cy.get('.btn.btn-success').click();




    })



