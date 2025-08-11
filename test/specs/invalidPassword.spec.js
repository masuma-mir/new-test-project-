import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'

describe('invalid password', () => {
    it('should not login with invalid credentials', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_cauce');
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    
    })
})
