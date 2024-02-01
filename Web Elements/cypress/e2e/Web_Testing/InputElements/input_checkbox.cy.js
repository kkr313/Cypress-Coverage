///<reference types = 'Cypress'/>

describe("checkbox operation", () => {
  it("Method 1 - using check/uncheck method only 1 checkbox", () => {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.get('[value="Cricket"]').check().should('be.checked').and('have.value', 'Cricket')
    cy.get('[value="Hockey"]').check().should('be.checked').and('have.value', 'Hockey')
    cy.get('[value="Movies"]').check().should('be.checked').and('have.value', 'Movies')

    cy.get('[value="Cricket"]').uncheck().should('not.be.checked')
    cy.get('[value="Hockey"]').uncheck().should('not.be.checked')
    cy.get('[value="Movies"]').uncheck().should('not.be.checked')

  });

  it("Method 2 - using check/uncheck method multipple checkbox", () => {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.get('input[type="checkbox"]').check(['Cricket', 'Hockey', 'Movies']).should('be.checked')
    cy.wait(2000)
    cy.get('input[type="checkbox"]').uncheck(['Cricket', 'Hockey', 'Movies']).should('not.be.checked')
  });

  it("Method 3 - using click method method all checkbox", () => {
      cy.visit('https://demoqa.com/checkbox')
      cy.get("label[for='tree-node-home'] span[class='rct-checkbox']").dblclick()
      cy.get("button[title='Expand all']").click()
      cy.get("label[for='tree-node-notes'] span[class='rct-title']").click()
  })
});
