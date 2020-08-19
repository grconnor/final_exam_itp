describe('user clicks the button on the page, looks at page',() =>
{
    beforeEach('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#quote').click()
        cy.get('#title').should('contain', "itp exam")
        cy.contains('feeling')

    })
})