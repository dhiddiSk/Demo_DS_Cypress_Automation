# Summary:

The cypress **Front-End** tests in this project were written on a **front end oriented** openly available practice website. Refer to the below screenshot on what website looks like.
![Website image](/e-commerceWebsiteTests/siteImage.png)

### Tech stack used: javasript, [Cucumber](https://cucumber.io/) , [Cypress](https://www.cypress.io/)

This project consists of the following important folders

- Page Objects: Here, one can define objects for every individual page of the application. These objects are made available across the whole project, which is located by default in the support folder. The page object design pattern plays a crucial role in maintaining the tests efficiently and easily.

- Test Features: Here the feature files describe the scenarios which will be certainly tested for the expected behaviors with test scripts.

- Test Scripts: Test Scripts are written accordingly based on test feature scenarios. One can easily convert the test features to test script functions skeleton body using [Tidy Gherkin](https://chrome.google.com/webstore/detail/tidy-gherkin/nobemmencanophcnicjhfhnjiimegjeo?hl=en-GB).

- Test Data: The test data is located in the fixtures folder used in the test scripts. This data remains unchanged during the time of test executions. One can acess the data from fixtures file in the tests using `cy.fixtures('filename')`.


Use below mentioned commands in prescribe order to run tests:

1. In the root of this directory folder, commad to download dependencies: `npm install` .
2. Command to Install cypress: `npm install cypress --save-dev`
3. Command to Run tests: `node_modules/.bin/cypress open`
