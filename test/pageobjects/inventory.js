import { $ } from '@wdio/globals';
import Page from './page.js';

class InventoryPage extends Page {
    get burgerButton() { return $('#react-burger-menu-btn'); }
    get logOutButton() {return $('#logout_sidebar_link')}

    open() {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();