import { $, expect } from '@wdio/globals';
import Page from './page.js';

class Socials extends Page {
    
    get footer() { return $('.social'); }
    get twitterLink() { return $('a[data-test="social-twitter"]'); }
    get facebookLink() { return $('a[data-test="social-facebook"]'); }
    get linkedinLink() { return $('a[data-test="social-linkedin"]'); }

 
    async waitForSocialLinks() {
        await this.footer.scrollIntoView();
        await this.twitterLink.scrollIntoView();
        await this.twitterLink.waitForDisplayed({ timeout: 1000 });
        await this.facebookLink.waitForDisplayed({ timeout: 1000 });
        await this.linkedinLink.waitForDisplayed({ timeout: 1000 });
    }


    async expectSocialLinks() {
        await expect(this.twitterLink).toBeDisplayed();
        await expect(this.facebookLink).toBeDisplayed();
        await expect(this.linkedinLink).toBeDisplayed();
    }


    async verifyTwitterLinkOpensCorrectly() {
        await this.twitterLink.click();

        const handles = await browser.getWindowHandles();
        expect(handles.length).toBeGreaterThan(1); 

        await browser.switchToWindow(handles[1]);

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('x.com/saucelabs'),
            {
                timeout: 10000,
                timeoutMsg: 'Twitter page did not load in time',
            }
        );     
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }

        async verifyFacebookLinkOpensCorrectly() {
            await this.twitterLink.click();
    
            const handles = await browser.getWindowHandles();
            expect(handles.length).toBeGreaterThan(1); 
    
            await browser.switchToWindow(handles[1]);
    
            await browser.waitUntil(
                async () => (await browser.getUrl()).includes('facebook.com/saucelabs'),
                {
                    timeout: 10000,
                    timeoutMsg: 'Facebook page did not load in time',
                }
            );

 
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }
    async verifyLinkedInLinkOpensCorrectly() {
        await this.twitterLink.click();

        const handles = await browser.getWindowHandles();
        expect(handles.length).toBeGreaterThan(1); 

        await browser.switchToWindow(handles[1]);

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('linkedin.com/saucelabs'),
            {
                timeout: 10000,
                timeoutMsg: 'Facebook page did not load in time',
            }
        );


    await browser.closeWindow();
    await browser.switchToWindow(handles[0]);
}
}

export default new Socials();
