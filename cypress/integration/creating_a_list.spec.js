describe('Creating a pony', () => {
    it('Displays the name in the list', () => {
        cy.visit('http://localhost:3001');

        cy.get('[data-testid="ponyName"]')
            .type('New pony');

        cy.get('[data-testid="sendButton"]')
            .click();
        
        cy.get('[data-testid="ponyName"]')
            .should('have.value', '');

        cy.contains('New pony');
    })
})