export class LoginPage{

username_textbox = 'input[name="username"]'
username_password = 'input[name="password"]'

login_button = '.oxd-button'
 
err_msg='.oxd-alert-content > .oxd-text'

enterUsername(username){
    cy.get(this.username_textbox).type(username)
}

enterPassword(password){
    cy.get(this.username_password).type(password)
}

clickLogin(){
cy.get(this.login_button).click()
}

errorMsg(){
    cy.get(this.err_msg).should('contain', 'Invalid credentialss')
}
}