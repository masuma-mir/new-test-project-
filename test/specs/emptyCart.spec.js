import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js';
import checkoutForm from '../pageobjects/checkoutForm.js';

describe('empty cart checkout', () => {
    it('should not checkout the cart', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.cartButton.click();
        await checkoutForm.checkoutButton.click();
        const errorCheckout = await $('.complete-header').getText();
        expect(errorCheckout).toContain('Cart is empty!');
    })
})
