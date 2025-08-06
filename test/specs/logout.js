import { expect } from '@wdio/globals';
import InventoryPage from '../pageobjects/inventory.js';
import LoginPage from '../pageobjects/login.page.js';

describe('login', () => {
    it('should logout', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');

        // Use proper waiting before clicks
        await InventoryPage.burgerButton.waitForClickable({ timeout: 5000 });
        await InventoryPage.burgerButton.click();

        await InventoryPage.logOutButton.waitForClickable({ timeout: 5000 });
        await InventoryPage.logOutButton.click();

        // Use toHaveValue for input elements
        await expect(LoginPage.inputUsername).toHaveValue('');
        await expect(LoginPage.inputPassword).toHaveValue('');
    });
});
