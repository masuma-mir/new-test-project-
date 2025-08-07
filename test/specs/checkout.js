import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.js';
import CheckoutForm from '../pageobjects/checkoutForm.js';

describe('checkout', () => {
    it('should checkout the cart', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.addToCart.click()
        await InventoryPage.cartButton.click()
        await expect(CheckoutForm.cartBadge).toHaveText('1');
        await CheckoutForm.checkoutButton.click();
        await CheckoutForm.checkout('First','Last','12474')
        await CheckoutForm.completeCheckout()

        const confirmation = await $('.complete-header').getText();
        expect(confirmation).toContain('Thank you for your order!');

        await InventoryPage.open()
        await expect(CheckoutForm.cartBadge).not.toBeDisplayed();
    
    })
})
