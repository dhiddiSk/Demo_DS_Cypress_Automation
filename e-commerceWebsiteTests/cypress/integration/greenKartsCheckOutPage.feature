Feature: Greenkart shopping check out page feature
    Here, I'm validating all the data and the functionalities in checkout page.

    Background:
        Given I should be in the "greeKartHomepageUrl" page

    Scenario: Validate if the added product to the shopping cart is shown in the checkout page correctly
        Then I add "2" of items of product "Brocolli"
        And I click on element at ".cart-icon", indexed at "0"
        When I click on element at ".action-block", indexed at "0"
        Then I should be in the "greenKartCheckoutPageUrl" checkOutpage
        Then Validate if the price and quantity of products are matching correctly with the total amount

    Scenario: Validate if the user entered promocode is working correctly and check the place order button functionality
        Then I add "2" of items of product "Brocolli"
        And I click on element at ".cart-icon", indexed at "0"
        When I click on element at ".action-block", indexed at "0"
        Then I should be in the "greenKartCheckoutPageUrl" checkOutpage
        Then Validate if the price and quantity of products are matching correctly with the total amount
        And I enter the promoCode "rahulshettyacademy" at element ".promocode", indexed at "0"
        Then I click on element at ".promoBtn", indexed at "0"
        And Validate the toast message "Code applied ..!" at element ".promoInfo"
        Then Validate if there is discount of "10" percent obeserved in the product price at element ".discountPerc"

    Scenario: Validate if the user after placing the order lands in the country dropdown selection page.
         Then I add "2" of items of product "Brocolli"
        And I click on element at ".cart-icon", indexed at "0"
        When I click on element at ".action-block", indexed at "0"
        Then I should be in the "greenKartCheckoutPageUrl" checkOutpage
        Then Validate if the price and quantity of products are matching correctly with the total amount
        And I enter the promoCode "rahulshettyacademy" at element ".promocode", indexed at "0"
        Then I click on element at ".promoBtn", indexed at "0"
        And Validate the toast message "Code applied ..!" at element ".promoInfo"
        Then Validate if there is discount of "10" percent obeserved in the product price at element ".discountPerc"
        And Select the country "India" from the dropdown
        Then Click on checkbox of terms and conditions
        Then Click on "Proceed" button
        Then Check if you landed on the last page of the webapplication and seen the string "hank you, your order has been placed successfully
You'll be redirected to Home page shortly!!"

