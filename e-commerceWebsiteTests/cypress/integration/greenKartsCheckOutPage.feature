Feature: Greenkart shopping check out page feature
    Here, I'm validating all the data and the functionalities in checkout page.

    Background:
          Given I should be in the "greeKartHomepageUrl" page

    Scenario: Validate if the added product to the shopping cart is shown in the checkout page correctly.
        Then I add "2" of items of product "Brocolli"
        And I click on element at ".cart-icon", indexed at "0"
        When I click on element at ".action-block", indexed at "0"
        Then I should be in the "greenKartCheckoutPageUrl" checkOutpage

    Scenario: Validate if the user entered promocode is working correctly and check the place order button functionality.
        Then I add "2" of items of product "Brocolli"
        And I click on element at ".cart-icon", indexed at "0"
        When I click on element at ".action-block", indexed at "0"
        Then I should be in the "greenKartCheckoutPageUrl" checkOutpage
        And I enter the promoCode "rahulshettyacademy" at element ".promocode", indexed at "0"
        Then I click on element at ".promoBtn", indexed at "0"
        And Validate the toast message "Code applied ..!" at element ".promoInfo"
        Then Validate if there is discount of "10" percent obeserved in the product price at element ".discountPerc"
