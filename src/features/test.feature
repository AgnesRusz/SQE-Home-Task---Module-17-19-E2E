Feature: Executing a search from the home page
    As a user I want to see the page title and the company logo
    and want to execute a search

    Background:
        Given the window is set to max
        And the home page is opened

    Scenario: 1. Check the page title and the logo and execute a search
        When the page is loaded
        Then the page title should contain "EPAM | Software Engineering & Product Development Services"
        And the logo should be visible
       
        When the search icon is clicked
        Then the search input field should be visible
       
        When the "automation" is typed in the search input field
        And the find button is clicked
        Then the search result page should be loaded
        And the search results header text should contain 'RESULTS FOR "AUTOMATION"'