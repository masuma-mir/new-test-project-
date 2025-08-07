import { expect } from '@wdio/globals';
import InventoryPage from '../pageobjects/inventory.js';
import LoginPage from '../pageobjects/login.page.js';

describe('login', () => {
    it('should logout', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.logout()

        await LoginPage.inputUsername.waitForDisplayed({ timeout: 5000 });
        await expect(LoginPage.inputUsername).toHaveValue('');
        await expect(LoginPage.inputPassword).toHaveValue('');
    });
});
