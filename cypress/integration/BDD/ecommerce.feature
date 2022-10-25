Feature: End to End Ecommerce Validation

    Application Feature Testing
    Scenario: Ecommerce products delivery
    Given Open Ecommerce page
    When Add items to Cart
    And Validate the prices of the total price
    Then select the country sub,it and verify Thankyou.

    