///<reference types= "cypress"/>

describe('test', function () {
    beforeEach(function () {
        cy.visit('https://www.flipkart.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })
    it('TC -01', function () {
        cy.get('._1_3w1N').click()
        cy.get('input._2IX_2-.VJZDxU:first').type('9766778976')
        cy.get('input._2IX_2-.VJZDxU:last').type('Dosa23792@')
        cy.get('button._2KpZ6l').eq(1).should('be.visible').click()
        cy.wait(2000)
        cy.get('._3704LK').type('book')
        cy.wait(2000)
        cy.get('.lrtEPN').each(function (el) {
            cy.wrap(el).invoke('text').then(function (txt) {
                if (txt.trim() == "books to read") {
                    cy.wrap(el).click()
                    return false
                }
            })
        })
        cy.get('a._2rpwqI:first').should('be.visible').invoke('removeAttr', 'target').click()
        cy.wait(2000)
        cy.get('button._2KpZ6l._2U9uOA._3v1-ww').should('be.visible').click({ force: true })
        cy.get('a._2Kn22P.gBNbID').should('be.visible').and('contain', 'Meditations')
    })
    it.skip('tc', function () {
        cy.get('._3704LK').type('book')
        cy.wait(2000)
        cy.get('.lrtEPN').each(function (el) {
            cy.wrap(el).invoke('text').then(function (txt) {
                if (txt.trim() == "books to read") {
                    cy.wrap(el).click()
                    return false
                }
            })
        })
        cy.get('a._2rpwqI:first').should('be.visible').invoke('removeAttr', 'target').click()
        cy.wait(2000)
        cy.get('button._2KpZ6l._2U9uOA._3v1-ww').should('be.visible').click({ force: true })
        //cy.wait(2000)
        cy.get('a._2Kn22P.gBNbID').should('be.visible').and('contain', 'Meditations')

    })

})

