///<reference types = 'Cypress'/>

describe('Radio Btn Operation',()=>{
    it('Method 1 - click on enabled radio btn',()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('input[value="Male"]').click().should('be.checked')
        cy.get('input[value="FeMale"]').should('not.be.checked')
        cy.get('input[value="FeMale"]').click()
    })

    it('Method 2 - click on disabled radio btn',()=>{
        cy.visit('https://demoqa.com/radio-button')
        cy.get("#noRadio").invoke('removeAttr', 'disabled').should('be.enabled')
    })
})