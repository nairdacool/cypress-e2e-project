// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#login').submit()
})

Cypress.Commands.add('logout', () => {
    cy.get('.button.secondary.radius').click()
    cy.url().should('include', '/login')
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
})