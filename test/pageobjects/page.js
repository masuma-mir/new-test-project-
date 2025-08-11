import { browser } from '@wdio/globals'


export default class page {

    open (path) {
        return browser.url(`https://www.saucedemo.com/`)
    }
}