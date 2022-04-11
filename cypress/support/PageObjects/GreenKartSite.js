class GreenKartsite{

AddvegetablesToCartBysearchKeyword(keyword, ...keywordMatchingVegetablesList){
    
    cy.visit(Cypress.env('vegetablesHomepageUrl'));

    cy.get(".search-keyword").type(keyword);
    
    cy.wait(3000);

    cy.get('.products').find('.product').each(($el, index, $list) => {
    
        if(keywordMatchingVegetablesList.includes($el.find('h4.product-name').text())){
    
            $el.find("button[type=button]").click();
    
        
          }

    })


    }

numberOfItemsIncart(){

    return Numeber(cy.get('.cart-count').text());




}

}    
export default GreenKartsite;