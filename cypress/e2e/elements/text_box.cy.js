describe("Input Test Box Automation", ()=>{
    // it('navigates', () => {
    //     cy.visit('https://demoqa.com')
    //   })
      
    it('navigates to new origin', () => {
    cy.visit('https://demoqa.com/elements')


    cy.xpath("(//ul[@class='menu-list']//li)[1]").click()
    cy.get('#userName-label')
        .contains('Full Name')
        .should('exist');
    })
})