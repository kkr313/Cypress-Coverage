///<reference types = 'Cypress'/>

describe('Dropdown Operation', () => {
    it('single dropdown value - using index value and direct value', () => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('select[id=Skills]').select(4) // selecting dropdown by index value
        cy.get('select[id=Skills]').select('AutoCAD') // selecting dropdown by value
    });

    it.only('Multiple dropdown selection - using index value and direct value', () => {
        cy.visit('https://demo.automationtesting.in/Register.html')
        cy.get('#msdd').click()
        cy.get('.ui-autocomplete').contains('Catalan').click()
        cy.get('.ui-autocomplete').contains('English').click()
    });
});