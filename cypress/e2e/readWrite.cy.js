it('Read files using Fixture', function () {

    cy.fixture('example.json').then((data) => {

        cy.log(data.name)
        cy.log(data.email)

    })
})

it('Read files using readFile()', function(){

cy.readFile('./cypress/fixtures/example.json').then((data) => {

    cy.log(data.name)
})

})


it('Write to a file', function(){

    cy.writeFile('Sample.txt','Hey Im Ajith Ashokkumar \n')
    cy.writeFile('Sample.txt','Hey Im Ajith Ashokkumar',{flag:'a+'})
    
    })
    