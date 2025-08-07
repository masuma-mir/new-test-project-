import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.js';
import CheckoutForm from '../pageobjects/checkoutForm.js';

describe('empty cart checkout', () => {
    it('should not checkout the cart', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.cartButton.click()
        await CheckoutForm.checkoutButton.click();

        const errorCheckout = await $('.complete-header').getText();
        expect(errorCheckout).toContain('Cart is empty!');
      


    
    })
})
