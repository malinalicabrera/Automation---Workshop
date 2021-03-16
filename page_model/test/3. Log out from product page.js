/** 
 * AUTHOR: MALINALI CABRERA
 * WIZELINE ASSESMENT 1
 * Test Script: 3 - Log Out from Product Page
 * **/
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import {CREDENTIALS} from '../data/Constants'
fixture('Wizeline Assesment 1')
.page `https://www.saucedemo.com/`
.beforeEach(async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
})

test('3: Log out from Product Page', async t =>{
    
   
    await t.expect(ProductPage.productLabel.exists).ok()
    await ProductPage.logOut()
    await t.expect(LoginPage.loginButton.exists).ok()
})




