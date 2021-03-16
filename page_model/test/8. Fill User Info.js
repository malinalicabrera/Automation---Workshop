import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CheckOutPage from '../pages/CheckOutPage'
import {CREDENTIALS} from '../data/Constants'

fixture('Wizeline Assesment 1')
.page `https://www.saucedemo.com/`
.beforeEach(async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
})

test('8: Fill User Information', async t =>{
    
   
    await t.expect(ProductPage.productLabel.exists).ok()
    await ProductPage.addMultipleItemToShoppingCart()
    await ProductPage.navigateToShoppingCart()
    await t.expect(ProductPage.yourCartLabel.exists).ok()
    await t.expect(ProductPage.inventoryItemName.exists).ok()
    await ProductPage.checkOut()
    await CheckOutPage.fillUserInfo(CREDENTIALS.USER_INFO.FIRSTNAME, CREDENTIALS.USER_INFO.LASTNAME, CREDENTIALS.USER_INFO.POSTALCODE)
})




