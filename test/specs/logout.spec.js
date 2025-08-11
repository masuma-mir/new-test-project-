import { expect } from '@wdio/globals';
import inventoryPage from '../pageobjects/inventory.page.js';
import loginPage from '../pageobjects/login.page.js';

describe('login', () => {
    it('should logout', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.logout();
        await loginPage.inputUsername.waitForDisplayed({ timeout: 5000 });
        await expect(loginPage.inputUsername).toHaveValue('');
        await expect(loginPage.inputPassword).toHaveValue('');
    });
});
