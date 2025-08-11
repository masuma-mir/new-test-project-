import { $, expect } from '@wdio/globals';
import page from './page.js';

class checkoutForm extends page {

    get checkoutButton() { return $('#checkout'); }
    get continueShopping() { return $('.continue-shopping'); }
    get cartBadge() {return $('.shopping_cart_badge');}
    get firstNameField() { return $('#first-name'); }
    get lastNameField() { return $('#last-name'); }
    get zipCodeField() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishCheckout() { return $('#finish')};
 
    async checkout(firstName, lastName, zipCode) {
        await this.lastNameField.waitForDisplayed();
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.zipCodeField.setValue(zipCode);
        await this.continueButton.click();
    }
    async completeCheckout() {
        await this.finishCheckout.waitForClickable();
        await this.finishCheckout.click();
    }
    
}
export default new checkoutForm();
