import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.js';

describe('cart save', () => {
    it('should save the product in the cart after logout', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.addToCart.click()
        await InventoryPage.cartButton.click()
        await expect(InventoryPage.cartButton).toHaveText('1');
    
        await InventoryPage.logout()

        await LoginPage.inputUsername.waitForDisplayed({ timeout: 5000 });
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(InventoryPage.cartButton).toHaveText('1');
    })
})
