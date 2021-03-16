import { Selector, t}  from 'testcafe'
class ProductPage {
    constructor(){
        this.productLabel = Selector('.product_label')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logOutButton = Selector('#logout_sidebar_link')
        this.shoppingcartButton = Selector('#shopping_cart_container')
        this.yourCartLabel = Selector('.subheader')
        this.addItemButton_BackPack = Selector('.pricebar > button.btn_primary.btn_inventory')
        this.addItemButton_Bike = Selector('.pricebar > button.btn_primary.btn_inventory').withText("ADD TO CART");
        this.inventoryItemName = Selector('.inventory_item_name')
        this.checkoutButton = Selector('.btn_action')
    }
    async logOut()
    {
        await t.click(this.menuButton)
        await t.click(this.logOutButton)
    }
    
    async navigateToShoppingCart()
    {
        await t.click(this.shoppingcartButton)
    
    }

    async addOneItemToShoppingCart()
    {
        await t.click(this.addItemButton_BackPack)
    
    }

    async addMultipleItemToShoppingCart()
    {
        await t
        .click(this.addItemButton_Bike.nth(0))
        .click(this.addItemButton_Bike.nth(0))
        .click(this.addItemButton_Bike.nth(0))
    
    }

    async checkOut()
    {
        await t.click(this.checkoutButton)
        
    
    }
}
export default new ProductPage()