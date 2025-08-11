import { $ } from '@wdio/globals'
import page from './page.js';

class loginPage extends page {
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnSubmit () {
        return $('#login-button');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    get errorMessage (){
        return $('.error-message-container');
    }
    open () {
        return super.open('login');
    }
}

export default new loginPage();
