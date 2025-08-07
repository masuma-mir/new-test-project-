import { $, $$, expect } from '@wdio/globals';
import Page from './page.js';

class InventoryPage extends Page {
    // Selectors
    get burgerButton() { return $('#react-burger-menu-btn'); }
    get logOutButton() { return $('#logout_sidebar_link'); }
    get addToCart() { return $('#add-to-cart-sauce-labs-bike-light'); }
    get cartButton() { return $('.shopping_cart_link'); }
    get sortingDropdown() { return $('.product_sort_container'); }
    get footer() {return $('.social');
    }
    
    async goToFooter() {
        await this.footer.waitForExist({ timeout: 10000 });  
        await this.footer.scrollIntoView();                 
    }
    

   
    async logout() {
        await this.burgerButton.waitForClickable({ timeout: 5000 });
        await this.burgerButton.click();
        await this.logOutButton.waitForExist({ timeout: 10000 }); 

        await this.logOutButton.waitForClickable({ timeout: 5000 });
        await this.logOutButton.click();
    }

    
    async sortByPrice() {
        await this.sortingDropdown.selectByVisibleText('Price (low to high)');

        const priceElements = await $$('.inventory_item_price');
        const prices = [];

        for (const priceEl of priceElements) {
            const text = await priceEl.getText();
            prices.push(parseFloat(text.replace('$', '')));
        }

        const sortedPrices = [...prices].sort((a, b) => a - b);
        await expect(prices).toEqual(sortedPrices);
    }

    
    async sortByName() {
        await this.sortingDropdown.selectByVisibleText('Name (Z to A)');

        const nameElements = await $$('.inventory_item_name');
        const names = [];

        for (const nameEl of nameElements) {
            names.push(await nameEl.getText());
        }

        const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
        await expect(names).toEqual(sortedNames);
    }

    
    open() {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();
