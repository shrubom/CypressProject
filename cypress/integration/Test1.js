/// <reference types = 'cypress' />
describe("My first test suite", function () {
  it("My first test case", function () {
    console.log("Open the URL");
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get("input.search-keyword").type("ca");
    //To validate how many objects are displayed and assert it using chai framework
    cy.wait(4000);
    cy.get(".product:visible").should("have.length", 4);
  });
});
