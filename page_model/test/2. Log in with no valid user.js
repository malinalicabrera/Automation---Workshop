import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import {CREDENTIALS} from '../data/Constants'
fixture('Wizeline Assesment 1')
.page `https://www.saucedemo.com/`

test('2: User can not login using invalid credentials', async t =>{
    await t
    
    .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME)
    .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
    .click(LoginPage.loginButton)


    await t.expect(LoginPage.errorButton.exists).ok() 
})


