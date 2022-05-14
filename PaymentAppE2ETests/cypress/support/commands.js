// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("apiLogin", (email, password) => {
  if (loginEmailAddress === undefined && loginPassword === undefined) {
    cy.request({
      method: "POST",
      url: Cypress.env("loginApi_url"),
      body: {
        email: constant.userCredentials.userName,
        password: constant.userCredentials.userPassowrd,
      },
    }).then((resp) => {
      window.localStorage.setItem("token", resp.body.token);
    });
  } else {
    cy.request({
      method: "POST",
      url: Cypress.env("loginApi_url"),
      body: {
        email: email,
        password: password,
      },
    }).then((resp) => {
      window.localStorage.setItem("token", resp.body.token);
    });
  }
});

Cypress.Commands("signUp", (firstName, lastName, userName, password) => {
  cy.get("#firstName").type(firstName);
  cy.get("#lastName").type(lastName);
  cy.get("#username").type(userName);
  cy.get("#password").type(password);
  cy.get("#confirmPassword").type(password);
  cy.get(".MuiButton-label").click();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
