
//  it('Google Search', () => {
//     cy.visit('https://google.com')

//     cy.get('#L2AGLb > .QS5gu').click()

//     cy.get('.gLFyf').type('Ajith Ashokkumar {Enter}')

//     //cy.contains('Google Search').click()
//   })


it('Magento Test', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')

cy.xpath('//*[@id="form-validate"]/div/div[1]/button/span').click()

  
})