import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('invalid login', () => {
    it('should not login with invalid login', async () => {
        await LoginPage.open()

        await LoginPage.login('standarD_user', 'secret_sauce')
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
    
    })
})
