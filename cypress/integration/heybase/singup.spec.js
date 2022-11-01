///<reference types = "cypress" />

describe('verify the sign in functionality', function () {
    beforeEach(function () {
        cy.visit('https://app.heybase.io/Login')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    
    })

    it('TC -1 Create account ', function () {
        cy.contains("Create an account").click()
        cy.get('input[type="text"]').eq(0).type('Prashant Gupta')
        cy.get('input[type="text"]').last().type('gupta.prem555@yahoo.com')
        cy.get('input[type="password"]').type('abcd@1234')
        cy.contains("Create Account").click()
    })

    it('TC -2 sing in with the valid corendetial ', function () {
        cy.contains("Sign In").click()
        cy.get('input[type="text"]').type('gupta.prem555@yahoo.com')
        cy.get('input[type="password"]').type('abcd@1234')
        cy.contains("Keep Me Signed In").click({ force: true })
        cy.contains("Sign In").click()
        cy.wait(4000)
        cy.get('span[ class="ml-2"]').should('have.text', 'Prashant Gupta')
    })

    it('TC -3 sing in with the Invalid Password ', function () {
        cy.contains("Sign In").click()
        cy.get('input[type="text"]').type('gupta.prem555@yahoo.com')
        cy.get('input[type="password"]').type('abcd@12345')
        cy.contains("Keep Me Signed In").click({ force: true })
        cy.contains("Sign In").click()
        cy.get('div[class="sc-brCFrO fYNqYV"]>div').should('have.text', 'Username or Password is Invalid!')
    })

    it('TC -4 sing in with the Invalid email ', function () {
        cy.contains("Sign In").click()
        cy.get('input[type="text"]').type('gupta.prem555@yahoo.om')
        cy.get('input[type="password"]').type('abcd@1234')
        cy.contains("Keep Me Signed In").click({ force: true })
        cy.contains("Sign In").click()
        cy.get('div[class="sc-brCFrO fYNqYV"]>div').should('have.text', 'Username or Password is Invalid!')
    })
})