import { Selector, t}  from 'testcafe'
class CheckOutPage {
    constructor(){
        this.continueButton = Selector('input[class="btn_primary cart_button"]')
        this.errorMessage = Selector('.checkout_info_wrapper h3')
        this.firstName = Selector('#first-name')
        this.lastName = Selector('#last-name')
        this.postalCode = Selector('#postal-code')

    }

    async missingMailInfo()
    {
        await t.click(this.continueButton)
       
    } 

    async fillUserInfo(firstname, lastname, zip)
    {
        await t.typeText(this.firstName, firstname)
        await t.typeText(this.lastName, lastname)
        await t.typeText(this.postalCode, zip)
        await t.click(this.continueButton) 
    }
    
    
}
export default new CheckOutPage()
