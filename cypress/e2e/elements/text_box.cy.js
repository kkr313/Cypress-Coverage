// Label or string available on UI
// Btn or Input field Avaialable on UI
// Placeholder String assertion
// Input box interaction( Type, remove, clear, enterd data check)
// Error assertion ( border error, inline error)
// have value or not in Input box
// Slow type in input field
// Remove character from input field and re-enter
// Replace a entered value
// Visble the entered password

describe("Input Test Box Automation", ()=>{ 
    let url;
    it.only('Label/Elements availale Assertion', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').then(() => {
            cy.url().then((currentUrl) => {
            url = currentUrl;
            });
        });
       
        cy.xpath("//label[contains(text(), 'Username')]").should('be.visible');
        cy.get("input[name='username']").should('be.visible');
        cy.get('input[name="username"]').should('have.attr', 'placeholder', 'Username');

        cy.xpath("//label[contains(text(), 'Password')]").should('be.visible');
        cy.get("input[name='password']").should('be.visible');
        cy.get('input[name="password"]').should('have.attr', 'placeholder', 'Password');

        cy.get("button[type='submit']").should('be.visible').click()

        cy.get('input[name="username"]').should('have.css', 'border-color', 'rgb(235, 9, 16)'); // border error
        cy.get('span.oxd-input-group__message').should('be.visible').and('contain', 'Required'); // inline error

        cy.get('input[name="password"]').should('have.css', 'border-color', 'rgb(235, 9, 16)'); // border error
        cy.get('span.oxd-input-group__message').should('be.visible').and('contain', 'Required'); // inline error
    })

    it("Url Operations", () =>{
        cy.visit(url);
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

    it('input field operations', () =>{
        const UserName = 'Admin';

        cy.visit(url)

        cy.get('input[name="username"]').should('exist');
        cy.get('input[name="username"]').should('have.value', '');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="username"]').clear().type(UserName, { delay: 500 }).should('have.value', UserName);

        cy.get('input[name="username"]').clear().type("Admmm", { delay: 500 }).type('{backspace}'.repeat(2)).type('in');

        cy.get('input[name="password"]').clear().type("admin@123", { delay: 500 });

        cy.get('input[name="password"]').invoke('val').then((text) => {
            cy.get('input[name="password"]').invoke('attr', 'type', 'text');
            const updatedText = text.replace('@', '');
            cy.get('input[name="password"]').clear().type(updatedText, { delay: 500 });
          });
    })
})