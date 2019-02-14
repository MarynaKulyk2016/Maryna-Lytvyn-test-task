Feature: Test task
  As a user of platform
  I should be able to perform CRUD operations

  Background:
    Given I am on homepage

  Scenario: User should be able to add computer TC-1
    Given I click Add computer button
    Then I fill in the name input
    And I fill in the introduced date input
    And I fill in the discontinued date input
    And I select option
    And I click Save button
    Then I should see success message

  Scenario: User should be able to find computer TC-2
    Given I fill in the search field
    And I click filter button
    Then I see added computer item

  Scenario: User should be able to delete computer TC-3
    Given I fill in the search field
    And I click filter button
    And I click first computer name
    And I click delete button
    Then I fill in the search field
    And I click filter button
    And I see empty search result
    And I wait 3000 milliseconds