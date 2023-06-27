/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    constructor() {
        //this.pageTitle = $('[property="og:title"]');
        this.searchIcon = $('.header-search__button');
        this.searchButton = $('.header-search__submit');
        this.searchInputField = $('.header-search__input');
        this.searchResultsHeader = $('.search-results__counter');
        this.logo = $('a[class="header__logo-container desktop-logo"]');
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async load() {
        return browser.url(`https://www.epam.com/`);
    };
    
    async clickSearchIcon() {
        this.searchIcon.click();
    };

    async clickSearchButton() {
        this.searchButton.click();
    };

    async addSearchTerm(searchTerm) {
        this.searchInputField.click();
        this.searchInputField.addValue(searchTerm);
    };

    async loadResults() {
        return browser.url('https://www.epam.com/search?q=automation');
    };
}

module.exports = Page;
