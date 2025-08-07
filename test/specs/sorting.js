import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.js';

describe('sort', () => {
    it('should sort the products on inventory page', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await InventoryPage.sortByPrice()
        await InventoryPage.sortByName()
    
    })
})
