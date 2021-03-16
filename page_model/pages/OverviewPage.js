import { Selector, t}  from 'testcafe'
class OverviewPage {
    constructor(){
        this.addedItem_BackPack = Selector('.inventory_item_name').withExactText('Sauce Labs Backpack')
        this.addedItem_Bike = Selector('.inventory_item_name').withExactText('Sauce Labs Bike Light')
        this.addedItem_tShirt = Selector('.inventory_item_name').withExactText('Sauce Labs Bolt T-Shirt')
        this.finishButton = Selector('.btn_action')


    }

    async navigateToConfirmationPage()
    {
        await t.click(this.finishButton)
    
    }
}

export default new OverviewPage()