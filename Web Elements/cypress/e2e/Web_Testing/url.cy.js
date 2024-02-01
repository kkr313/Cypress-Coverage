///<reference types = 'Cypress'/>

describe('Url Related Operation', () => {
        it("Url Operations", () =>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            // Check the current URL:
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      
            // Check for a partial URL match:
            cy.url().should('include', 'auth/login');
      
            // Check the domain or hostname of the URL:
            cy.url().should('match', /https:\/\/opensource-demo\.orangehrmlive\.com/);
      
            // Check the URL protocol:
            cy.url().should('match', /^https:/);
      
            // Check for a redirected URL:
            cy.url().should('not.equal', 'https://opensource-demo.orangehrmlive.com/redirected');
      
        })
});