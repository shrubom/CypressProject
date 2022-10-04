/// <reference types = 'cypress'/>

describe("Cypress Test Framework Test Suite", function () {
  before("Opening the url", function () {});
  it("Mocha Test Framework", function () {
    cy.get("input.search-keyword").type("ca");
  });
});
