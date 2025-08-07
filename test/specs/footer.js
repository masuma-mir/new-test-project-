import LoginPage from '../pageobjects/login.page.js';
import Socials from '../pageobjects/socials.js';
import InventoryPage from '../pageobjects/inventory.js';

describe('Footer social media links', () => {
    it('should verify Twitter link opens in a new tab with correct URL', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.goToFooter()

        await Socials.waitForSocialLinks();
        await Socials.expectSocialLinks();
        await Socials.verifyTwitterLinkOpensCorrectly();
        await Socials.verifyFacebookLinkOpensCorrectly();
        await Socials.verifyLinkedInLinkOpensCorrectly();
    });
});
