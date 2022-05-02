Feature: Greenkart shopping home page feature
     Here, I'm validating all the available functionalities those include search bar, products, shopping cart, shopping functionalities of the shopping page.

     Background:
          Given I should be in the "greeKartHomepageUrl" page


     Scenario: Validate if all the products and corresponding information is correct using fixtures data.
          Then I go through each product and validate the presence and their corresponding data that includes image, price, order, category.


     Scenario Outline: Validate the functionality of the search bar
          Then I enter the search <key> word at element "input[type = 'search']" and validate if all the products displayed contains the entered key.
          Then I clear the search bar

          Examples:
               | key |
               | br  |
               | ca  |

     Scenario Outline: Validate the functionaliy of adding products to cart
          Then I add <no> of items of product <products>
          And I click on element at ".cart-icon", indexed at "0"
          Then Validate if the correct number <no> of <products> are added to the cart and money charged accordingly

          Examples:
               | no | products |
               | 2  | Brocolli |
               | 3  | Carrot   |
               | 1  | Cucumber |

