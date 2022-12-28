export class LoginPage{

username_textbox = 'input[name="username"]'
username_password = 'input[name="password"]'

login_button = '.oxd-button'

enterUsername(username){
    cy.get(this.username_textbox).type(username)
}

enterPassword(password){
    cy.get(this.username_password).type(password)
}

clickLogin(){
cy.get(this.login_button).click()
}
}