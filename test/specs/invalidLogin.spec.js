import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'

describe('invalid login', () => {
    it('should not login with invalid login', async () => {
        await loginPage.open();
        await loginPage.login('standarD_user', 'secret_sauce');
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
})
