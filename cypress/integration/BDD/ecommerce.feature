Feature: End to End Ecommerce Validation

    Application Feature Testing
    @Regression
    Scenario: Ecommerce products delivery
    Given Open Ecommerce page
    When Add items to Cart
    And Validate the prices of the total price
    Then select the country sub,it and verify Thankyou.
    @Smoke
    Scenario: Filling the form
    Given Open Ecommerce page
    When Add personal details
    |name    | gender |
    |Jane Doe| Female |
    Then Validate the form behavior
    And Go to the Shop page