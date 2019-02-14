import { $, browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

const TIMEOUT = 10000;

export class BasePage {
    /**
     * @description Wait for redirect to route.
     *
     * @param element
     * @param {string} text
     * @param {number} [timeOut=5000]
     *
     * @returns {Promise<void>}
     */
    async waitForElementContainText(element, text: string, timeOut: number = TIMEOUT) {
        await browser.wait(browser.ExpectedConditions.textToBePresentInElement(element, text), timeOut, `Not found text: ${text}`);
    }

    /**
     * @description Wait for visibility element.
     *
     * @param {ElementFinder} element
     * @param {string} [messageError=Error: Not found element]
     * @param {number} [timeout=5000]
     */
    async waitForVisibilityElement(
        element: ElementFinder,
        messageError: string = 'Error: Not found element',
        timeout: number = TIMEOUT
    ) {
        await browser.wait(ExpectedConditions.visibilityOf(element), timeout, messageError);
    }
}
