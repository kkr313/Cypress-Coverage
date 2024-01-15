///<reference types = 'Cypress'/>

describe('Textarea Automation', () => {
    it('Textarea input box Automation', () => {
        cy.visit('https://demoqa.com/text-box');
        cy.get('#userName').type('Karan Kumar');
        cy.get('#userEmail').type('kkr31398@gmail.com');
        // Assume you want to set rows to 8 and cols to 30
        cy.get('#currentAddress').invoke('attr', 'rows', 10);
        cy.get('#currentAddress').invoke('attr', 'cols', 30);
        cy.get('#currentAddress').type("Ranchi");
        cy.get('#permanentAddress').type('Patna');
        cy.get('#submit').click();
    });
});