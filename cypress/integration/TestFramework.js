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
    //validation of the value entered in the name is the same in data binding example field
    cy.get(":nth-child(4) > .ng-untouched").should(
      "have.value",
      this.testData.name
    );
    //Verify if the property minlength property is 2
    cy.get("input[name='name']:nth-child(2)").should(
      "have.attr",
      "minlength",
      "2"
    );
    //Validation of a radio button if it is disabled
    cy.get("#inlineRadio3").should("be.disabled");
  });
  it("Cypress custom commands", () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(2) > .nav-link").click();
    cy.wait(2000);
    cy.selectProduct("Blackberry");
    cy.selectProduct("Nokia Edge");
  });
});
