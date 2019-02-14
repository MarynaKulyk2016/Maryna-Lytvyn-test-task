import { ComputersPage } from '../pages/test.page';

import { Given } from 'cucumber';

const computersPage = new ComputersPage();

Given(/^I click Add computer button$/, async () => {
    await computersPage.clickAddComputerButton();
});

Given(/^I fill in the name input$/, async () => {
    await computersPage.typeNameInput('Test computer');
});

Given(/^I fill in the introduced date input$/, async () => {
    await computersPage.typeIntroDateInput('2012-04-08');
});

Given(/^I fill in the discontinued date input$/, async () => {
    await computersPage.typeDiscontinuedDateInput('2016-04-08');
});

Given(/^I select option$/, async () => {
    await computersPage.openDropDown();
});

Given(/^I click Save button$/, async () => {
    await computersPage.submit();
});

Given(/^I should see success message$/, async () => {
    await computersPage.seeSuccessMessage();
});

Given(/^I fill in the search field$/, async () => {
    await computersPage.typeSearchInput('Test computer');
});

Given(/^I click filter button$/, async () => {
    await computersPage.clickFilterButton();
});

Given(/^I see added computer item$/, async () => {
    await computersPage.seeAddedComputerName();
});

Given(/^I see empty search result$/, async () => {
    await computersPage.seeEmptySearchResult();
});

Given(/^I click first computer name$/, async () => {
    await computersPage.clickFirstComputerName();
});

Given(/^I click delete button$/, async () => {
    await computersPage.clickDeleteButton();
});