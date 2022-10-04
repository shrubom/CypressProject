/// <reference types = 'cypress'/>

describe("Cypress Test Framework Test Suite", function () {
  before("Opening the url", function () {
    cy.fixture("testData.json").then(function (data) {
      this.testData = data;
    });
  });
  it("Mocha Test Framework", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name="name"]:nth-child(2)').type(this.testData.name);
    cy.get("select").select(this.testData.gender);
  });
});
