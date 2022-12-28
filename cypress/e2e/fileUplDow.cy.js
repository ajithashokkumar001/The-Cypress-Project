it('File Upload', function(){

   // cy.origin('https://www.trytestingthis.netlify.app/')

   
cy.origin('https://trytestingthis.netlify.app', () => {
    
cy.visit('https://trytestingthis.netlify.app')

cy.get('#myfile').attachFile('example.json')

})
})