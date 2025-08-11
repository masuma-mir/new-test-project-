import loginPage from '../pageobjects/login.page.js';
import socials from '../pageobjects/socials.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Footer social media links', () => {
    it('should verify Twitter link opens in a new tab with correct URL', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.goToFooter();
        await socials.waitForSocialLinks();
        await socials.expectSocialLinks();
        await socials.verifyTwitterLinkOpensCorrectly();
        await socials.verifyFacebookLinkOpensCorrectly();
        await socials.verifyLinkedInLinkOpensCorrectly();
    });
});
