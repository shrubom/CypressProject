/// <reference types = 'cypress' />
describe("New test suite", function () {
  it("Handling child windows using cypress", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#opentab").then(function (e1) {
      const newLink = e1.prop("href");
      cy.log(newLink);
      cy.visit(newLink);
    });
  });
});
