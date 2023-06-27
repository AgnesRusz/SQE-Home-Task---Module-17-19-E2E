const { Given, When, Then } = require('@wdio/cucumber-framework');

const Page = require('../pageobjects/page.js');

const page = new Page();


Given(/^the home page is opened$/, async () => {
    await page.load();
/** return browser.getSessions();
 */
});

Given(/^the window is set to max$/, async () => {
    await browser.maximizeWindow();
});

When(/^the page is loaded$/, async () => {
    await browser.status();
    await page.logo.waitForDisplayed(1000);
    await page.searchIcon.waitForDisplayed(1000);
});

Then(/^the page title should contain "(.+)"$/, async (text) => {
    const pageTitle = await browser.getTitle();
    return expect(pageTitle).toContain(text);
});

Then(/^the logo should be visible$/, async () => {
    await expect(page.logo).toBeDisplayed();
});

When(/^the search icon is clicked$/, async () => {
    await page.searchIcon.waitForDisplayed(1000);
    return page.clickSearchIcon();
});

Then(/^the search input field should be visible$/, async () => {
    await page.searchInputField.waitForDisplayed(1000);
    await expect(page.searchInputField).toBeDisplayed();
});

When(/^the "(.+)" is typed in the search input field$/, async (searchTerm) => {
    return page.addSearchTerm(searchTerm);
});

When(/^the find button is clicked$/, async () => {
    await page.searchButton.waitForDisplayed(1000);
    return page.clickSearchButton();
});

Then(/^the search result page should be loaded$/, async () => {
    await page.searchResultsHeader.waitForDisplayed(1000);
    return page.loadResults();
});

Then(/^the search results header text should contain '(.+)'$/, async (text) => {
    await page.searchResultsHeader.waitForDisplayed(1000);
    const searchResultsHeader = await page.searchResultsHeader.getText();
    return expect(searchResultsHeader).toContain(text);
});