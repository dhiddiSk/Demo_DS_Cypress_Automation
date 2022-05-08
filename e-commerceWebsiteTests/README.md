# Summary:

The cypress tests were written







1. These cypress tests were written using an openly available practice website(link).

Page Objects: Here, one can define classes for every individual page of the application. These page objects are made available across the whole project.
The page object design pattern plays a crucial role in maintaining the e2e test frameworks more efficiently and easily. Page objects are located by default in support folder.

Test Scripts: Test Scripts are written to validate the expected behavior of the application by simulating the user's actions. These are generally located by default in the integration folder.

Test Data: The test data is located in fixtures folder and can be used in the test scripts. This data remains unchanged during the time of tests executions. One can call the fixtures file in the tests using "cy.fixtures('filename')".
Cypress supports many file formats, list can be found here.

Run: To run the test framework use the commands "npm run testWithDashBoard" at the project level, this will automatically open the test dashboard of cypress and allows us to run the scripts accordingly.


 In the root of this directory: Run npm install to download dependencies.
 Run the server using npm start
 In a separate terminal npm install cypress --save-dev

 This will install Cypress locally as a dev dependency for your project
