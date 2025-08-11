import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js';

describe('sort', () => {
    it('should sort the products on inventory page', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.sortByPrice();
        await inventoryPage.sortByName();
    
    })
})
