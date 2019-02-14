import { by, element, ElementFinder } from 'protractor';
import { BasePage } from './base.page';

export class ComputersPage extends BasePage {
    addComputerButton: ElementFinder;
    addComputerForm: ElementFinder;
    nameInput: ElementFinder;
    introducedDateInput: ElementFinder;
    discontinuedDateInput: ElementFinder;
    companyList: ElementFinder;
    appleOption: ElementFinder;
    submitBtn: ElementFinder;
    successMessage: ElementFinder;
    searchInput: ElementFinder;
    filterBtn: ElementFinder;
    firstComputerName: ElementFinder;
    pageTitle: ElementFinder;
    deleteBtn: ElementFinder;

    constructor() {
        super();
        this.addComputerButton = element(by.css('a[href="/computers/new"]'));
        this.addComputerForm = element(by.css('form[action="/computers"]'));
        this.nameInput = element(by.css('input[name="name"]'));
        this.introducedDateInput = element(by.css('input[name="introduced"]'));
        this.discontinuedDateInput = element(by.css('input[name="discontinued"]'));
        this.companyList = element(by.css('select[name="company"]'));
        this.appleOption = element(by.cssContainingText('option', 'Apple Inc.'));
        this.submitBtn = element(by.css('.actions input[type="submit"]'));
        this.successMessage = element(by.css('.alert-message'));
        this.searchInput = element(by.css('input[type="search"]'));
        this.filterBtn = element(by.css('#searchsubmit'));
        this.firstComputerName = element(by.css('table tbody tr:nth-child(1) td:nth-child(1) a'));
        this.pageTitle = element(by.css('#main h1'));
        this.deleteBtn = element(by.css('form.topRight input[type="submit"]'));
    }

    async clickAddComputerButton() {
        await this.addComputerButton.click();
        await this.waitForVisibilityElement(this.addComputerForm);
        await this.waitForElementContainText(this.pageTitle, 'Add a computer');
    }

    async typeNameInput(name: string) {
        await this.waitForVisibilityElement(this.nameInput);
        await this.nameInput.sendKeys(name);
    }

    async typeIntroDateInput(date: string) {
        await this.waitForVisibilityElement(this.introducedDateInput);
        await this.introducedDateInput.sendKeys(date);
    }

    async typeDiscontinuedDateInput(date: string) {
        await this.waitForVisibilityElement(this.discontinuedDateInput);
        await this.discontinuedDateInput.sendKeys(date);
    }

    async openDropDown() {
        await this.waitForVisibilityElement(this.companyList);
        await this.companyList.click();
        await this.waitForVisibilityElement(this.appleOption);
        await this.appleOption.click();
    }

    async submit() {
        await this.submitBtn.click();
    }

    async seeSuccessMessage() {
        await this.waitForVisibilityElement(this.successMessage);
        await this.waitForElementContainText(this.successMessage, 'Done!')
    }

    async seeEditedSuccessMessage() {
        await this.waitForVisibilityElement(this.successMessage);
        await this.waitForElementContainText(this.successMessage, 'has been updated')
    }



    async typeSearchInput(name: string) {
        await this.waitForVisibilityElement(this.searchInput);
        await this.searchInput.sendKeys(name);
    }

    async clickFilterButton() {
        await this.filterBtn.click();
    }

    async seeAddedComputerName() {
        await this.waitForVisibilityElement(this.firstComputerName);
        await this.waitForElementContainText(this.firstComputerName, 'Test computer')
    }

    async clickFirstComputerName() {
        await this.firstComputerName.click();
        await this.waitForElementContainText(this.pageTitle, 'Edit computer');
    }

    async clickDeleteButton() {
        await this.deleteBtn.click();
        await this.waitForElementContainText(this.successMessage, 'Done! Computer has been deleted');
    }

    async seeEmptySearchResult() {
        await this.waitForInvisibilityElement(this.firstComputerName);
        await this.waitForElementContainText(this.pageTitle, 'No computers found')
    }
}
