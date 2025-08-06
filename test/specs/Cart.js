import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.js';

describe('login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
    
    })
})
