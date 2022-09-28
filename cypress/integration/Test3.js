/// <reference types = 'cypress' />
describe("My third test suite", function () {
  it("My sixth test case", function () {
    cy.log("Handling Alert buttons");
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    //Now clicking on confirm button
    cy.get("input[value='Confirm']").click();
    //Handling the text inside the pop ups. Cypress listens to core browser events - window alerts.
  });
});
