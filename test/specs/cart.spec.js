import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js';

describe('cart save', () => {
    it('should save the product in the cart after logout', async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.addToCart.click();
        await inventoryPage.cartButton.click();
        await expect(inventoryPage.cartButton).toHaveText('1');
        await inventoryPage.logout();
        await loginPage.inputUsername.waitForDisplayed({ timeout: 5000 });
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(inventoryPage.cartButton).toHaveText('1');
    })
})
