describe('cypress example test', () => {

    beforeEach(() =>{
        cy.visit("/")
    })

    it('visits the example page and check a TODO item', () => {
        cy.visit("/todo")
        cy.get('.toggle').first().check()
        cy.get('.new-todo').type('New ToDo Item{enter}')
    })

    it('visits the example actions page and performs actions', () => {
        cy.visit('/commands/actions')
        cy.get('.action-select').select('apples')
        cy.url().should('include', '/commands/actions')
        cy.get('h1').should('contain.text', 'Actions')
    })

    it('visits the example cypress io page and assert the banner', () => {
        cy.get('.banner').should('be.visible')
        cy.get('#navbar').should('contain', 'Commands')
        cy.get('.container').then((items) => {
            const itemCount = items.length
            expect(itemCount).to.equal(8)
        })
    })

    it('visits the example page and validate the title', () => {
        cy.get("h1").should('contain.text', 'Kitchen Sink')
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
    })

    it('visits a second rul and validates the title', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(7) > a').click()
        cy.url().should('include', '/commands/navigation')
    })

    it('visit the example page and submit a form', () => {
         cy.get('.dropdown-toggle').click()
         cy.get('.dropdown-menu > :nth-child(3) > a').click()
         cy.get('#couponCode1').type('Hello world')
         cy.get('.action-form').submit()
         cy.get('.well > p').should('contain', 'Your form has been submitted!')
    })
})

describe('cypress example test with The Internet HerokuApp domain', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it('visit the page and validate the lon in and log out', () => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('#login').submit()
        cy.url().should('include','/secure')
        cy.get('#flash').should('contain.text', 'You logged into a secure area!')
        cy.get('.button').click()
        cy.url().should('include', '/login')
    })

    it('visit the page and validate the login with wrong credentials', () => {
        cy.get('#username').type('wornguser')
        cy.get('#password').type('worngpassword')
        cy.get('#login').submit()
        cy.url().should('include', '/login')
        cy.get('#flash').should('contain.text', 'Your username is invalid!')
    })
})

describe('interception and simulation of a server responde', () => {

    it('visit the google page and intercept the search request', () => {
        cy.intercept('GET', 'https://www.google.com/search*', {
            statusCode: 200,
            body: '<html><body><h1>Intercepted Response</h1></body></html>'
        }).as('googleSearch')

        cy.visit('https://www.google.com')
        cy.get('#L2AGLb > .QS5gu').click() // Acept cookies
        cy.get('#APjFqb').type('Cypress testing interception{enter}')
        cy.wait('@googleSearch')
        cy.contains('Intercepted Response').should('exist')
    })
})