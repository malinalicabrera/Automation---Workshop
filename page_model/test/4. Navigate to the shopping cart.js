/** 
 * AUTHOR: MALINALI CABRERA
 * WIZELINE ASSESMENT 1
 * Test Script: 4 - Navigate to the Shopping Cart
 * **/
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import {CREDENTIALS} from '../data/Constants'
fixture('Wizeline Assesment 1')
.page `https://www.saucedemo.com/`
.beforeEach(async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
})

test('4: Navigate to the Shopping Cart', async t =>{
    
   
    await t.expect(ProductPage.productLabel.exists).ok()
    await ProductPage.navigateToShoppingCart()
    await t.expect(ProductPage.yourCartLabel.exists).ok()


})




