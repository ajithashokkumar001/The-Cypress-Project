
 it('Google Search', () => {
    cy.visit('https://google.com')

    cy.get('#L2AGLb > .QS5gu').click()

    cy.get('.gLFyf').type('Ajith Ashokkumar {Enter}')

    //cy.contains('Google Search').click()
  })