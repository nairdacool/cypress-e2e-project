describe('cross domain test', () => {
    it('interact with a cross domain page', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.login('tomsmith', 'SuperSecretPassword!')
        cy.get('#flash').should('contain','You logged into a secure area!')
        cy.logout()

        cy.origin('https://example.cypress.io', () => {
            cy.visit("/todo")
            cy.get('.toggle').first().check()
            cy.get('.new-todo').type('New ToDo Item{enter}')
        })
    })
})