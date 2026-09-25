import { expect, Locator, Page } from '@playwright/test';
import sample from '../data/sample.json';
export class  basePage {    

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator("h3[role='alert']");
    }
async goto(){
     await this.page.goto('https://www.saucedemo.com/');
     await this.usernameInput.fill(sample[0].Username);
     await this.passwordInput.fill(sample[0].Password);
     await this.loginButton.click();
     await console.log('i am test1');

    
    }


 async lockedoutuser(){
    await this.page.goto('https://www.saucedemo.com/');
    await this.usernameInput.fill(sample[1].invalidUsername);
    await this.passwordInput.fill(sample[1].invalidPassword);
    await this.loginButton.click();
    await this.errorMessage.isVisible();
    const errorMessageText = await this.errorMessage.textContent();
    await console.log('Error message:', errorMessageText);
    await console.log('i am test2');    


}
}


