import { browser } from 'protractor';

const { Given } = require('cucumber');

Given(/^I am on homepage$/, async () => {
    await browser.get(browser.baseUrl);
});

Given(/^I close alert$/, async () => {
    await browser.switchTo().alert().accept();
});

Given(/^I reload page$/, async () => {
    await browser.refresh(1);
});

Given(/^I wait (\d+) milliseconds$/, async (delay) => {
    await browser.sleep(+delay);
});

Given(/^I should be on "(.*)" url/, async (url) => {
    await browser.get(url);
});
