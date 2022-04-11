class GreenKartsite {
    AddvegetablesToCartBysearchKeyword(
      keyword,
      ...keywordMatchingVegetablesList
    ) {
      cy.get(".search-keyword").type(keyword);
  
      cy.get(".products")
        .find(".product")
        .each(($el, index, $list) => {
          if (
            keywordMatchingVegetablesList.includes(
              $el.find("h4.product-name").text()
            )
          ) {
            $el.find("button[type=button]").click();
          }
        });
    }
  
    numberOfItemsIncart() {
      return Number(cy.get(".cart-count").text());
    }
  }
  export default GreenKartsite;
  