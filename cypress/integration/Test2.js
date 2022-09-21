/// <reference types = 'cypress' />
describe("My second test suite", function () {
  it("My third test case", function () {
    cy.log("More UI automation Techniques");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1").check();
  });
});
