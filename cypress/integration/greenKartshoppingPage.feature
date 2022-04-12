Feature: Greenkart shopping home page feature

    Here, I'm validating all the available functionalities those include search bar, products, shopping cart, shopping functionalities of the shopping page.

    Background: 
        Given I should be in the "greeKartHomepageUrl" homepage
    
    
    Scenario: Validate if all the products and corresponding prices are correct
         Then I go through each product and validate it's presence and their corresponding data that includes image, price, order, category.


    Scenario Outline: Validate the functionality of the search bar
         Then I enter the search <key> shortcut word and expect all the product with names that contains entered word.
         Then I clear the search bar

         Examples:
             | key |
             | "br" |

    Scenario: Validate the functionaliy of adding products to cart
         Then I add <number> of items of items of this <product>
         Then Validate if the products are added to the cart

    Scenario: Validate the functionality of the shopping cart in correspondence to products added to cart
         Then I add <number> of items of this <product>
         Then I remove the <product> from the cart and validate the total number of items.

