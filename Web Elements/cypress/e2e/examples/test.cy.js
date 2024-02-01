/// <reference types = 'cypress'/>
// This is the code where scraping the title of category in flipkart
describe('Flipakrt', () => {
    it('test1', () => {
        cy.visit('https://www.flipkart.com/');
        cy.get("._1XjE3T").each(($el)=>{
            const data = $el.text()
            cy.log(data)
        })
        console.log(this)
    });
});

