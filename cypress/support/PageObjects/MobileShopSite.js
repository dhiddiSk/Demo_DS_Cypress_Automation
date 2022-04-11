class MobileShopSite {
    // @method mobilesAddTocart adds the list of phones into the cart and clicks on checkout button.
    mobilesAddTocart(phonesArrayList) {
      cy.get(".card-title")
        .find("a")
        .each(($element, index, $list) => {
          if (phonesArrayList.includes($element.text())) {
            cy.get(".btn.btn-info").eq(index).click();
          }
        });
    }
  
    // Validating mobile product price and it's coressponding total price validation
    mobilePricesDisplayedInCheckOutPage() {
      const map = new Map();
  
      // Iterate through each of the product in the checkout page and validate the prices and total prices
  
      let productName,
        displayedPhoneValueWithCurrencySign,
        temp,
        displayedPhoneValueOnlyNumeric;
  
      cy.get(".media-body h4 a").each(($element, index, $list) => {
        cy.get("tr td:nth-child(3) >strong")
          .eq(index)
          .then(function (value) {
            productName = $element.text();
            displayedPhoneValueWithCurrencySign = value.text();
            temp = displayedPhoneValueWithCurrencySign.split(" ");
            displayedPhoneValueOnlyNumeric = temp[1].trim();
            map.push(productName, Number(displayedPhoneValueOnlyNumeric));
          });
      });
  
      return map;
    }
  
    mobileItemsDisplayedInCheckOutPage() {
      const displayedProducts = new Array();
  
      cy.get(".media-body h4 a").each((product, index, $list) => {
        const temp = product.text();
  
        displayedProducts.push(temp);
      });
  
      return displayedProducts;
    }
  
    mobileItemsTotalPricesInCheckOutPage() {
      const mobileItemsTotalPrices = new Array();
      let temp2, displayedPhoneTotalValueWithCurrencySign;
  
      cy.get("tr td:nth-child(4) >strong")
        .eq(index)
        .then(function (itemValue) {
          displayedPhoneTotalValueWithCurrencySign = itemValue.text();
  
          temp2 = displayedPhoneTotalValueWithCurrencySign.split(" ");
  
          displayedPhoneTotalValueWithCurrencySign = temp2[1].trim();
  
          mobileItemsTotalPrices.push(
            Number(displayedPhoneTotalValueWithCurrencySign)
          );
        });
    }
  
    mobilesRemoveFromCart(...phonesTobeRemoved) {
      cy.get(".media-body h4 a").each((product, index, $list) => {
        const temp = product.text();
  
        if (phonesTobeRemoved.includes(temp)) {
          cy.get(".btn.btn-danger").eq(index).click();
        }
      });
    }
  }
  
  export default MobileShopSite;
  