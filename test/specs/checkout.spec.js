import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js';
import checkoutForm from '../pageobjects/checkoutForm.js';

describe('checkout', () => {
    it('should checkout the cart', async () => {
        await loginPage.open()
        await loginPage.login('standard_user', 'secret_sauce')
        await inventoryPage.addToCart.click();
        await inventoryPage.cartButton.click();
        await expect(checkoutForm.cartBadge).toHaveText('1');
        await checkoutForm.checkoutButton.click();
        await checkoutForm.checkout('First','Last','12474')
        await checkoutForm.completeCheckout();
        const confirmation = await $('.complete-header').getText();
        expect(confirmation).toContain('Thank you for your order!');
        await inventoryPage.open();
        await expect(checkoutForm.cartBadge).not.toBeDisplayed();
    
    })
})
