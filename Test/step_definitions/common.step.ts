import { browser } from 'protractor';

const { Given } = require('cucumber');

Given(/^I am on homepage$/, async () => {
    await browser.get(browser.baseUrl);
});
