import { browser } from 'protractor';

const { BeforeAll, AfterAll, setDefaultTimeout } = require('cucumber');

const timeout = 60000;

setDefaultTimeout(timeout);

BeforeAll({ timeout: timeout }, async () => {
    await browser.get(browser.baseUrl);
    try {
        await browser.driver
            .manage()
            .window()
            .maximize();
    } catch (e) {
        console.log(e);
    }
});

AfterAll({ timeout: timeout }, async () => {
    await browser.quit();
});
