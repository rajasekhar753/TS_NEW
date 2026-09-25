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




}



