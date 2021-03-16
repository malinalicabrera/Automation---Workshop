import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import {CREDENTIALS} from '../data/Constants'
fixture('Wizeline Assesment 1')
.page `https://www.saucedemo.com/`
.beforeEach(async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
})

test('1: User can login using valid credentials', async t =>{
    
   
    await t.expect(ProductPage.productLabel.exists).ok()


})




