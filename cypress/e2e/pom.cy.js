import { LoginPage } from "./pages/loginPage"

const loginpage = new LoginPage()

describe('All login tests', function () {

    // beforeEach(function () {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // })

    

    it('Login Success Case', function () {

        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin123')

        loginpage.clickLogin()

    })
    it('Login Invalid Case', function () {

        loginpage.enterUsername('Admin1')
        loginpage.enterPassword('admin123')

        loginpage.clickLogin()

        loginpage.errorMsg()
    })
    it('Login Success using Fixture', function () {

        cy.fixture('example.json').then((data) => {
    
            loginpage.enterUsername(data.username)
            loginpage.enterPassword(data.password)
    
            loginpage.clickLogin()
    
        })
    })

 })
