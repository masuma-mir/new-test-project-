import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('invalid password', () => {
    it('should not login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_cauce')
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service')
    
    })
})
