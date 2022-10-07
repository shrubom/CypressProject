/// <reference types = 'cypress'/>
import HomePage from "../integration/PageObjects/HomePage";
import ProductPage from "../integration/PageObjects/ProductPage";

describe("Cypress Test Framework Test Suite", function () {
  before("Opening the url", function () {
    cy.fixture("testData.json").then(function (data) {
      this.testData = data;
    });
  });
  it("Mocha Test Framework", function () {
    const homePageObj = new HomePage();
    const productPageObj = new ProductPage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePageObj.getEditBox().type(this.testData.name);
    homePageObj.getGender().select(this.testData.gender);
    //validation of the value entered in the name is the same in data binding example field
    homePageObj.getTwoWayDataBinding().should("have.value", this.testData.name);
    //Verify if the property minlength property is 2
    homePageObj.getEditBox().should("have.attr", "minlength", "2");
    //Validation of a radio button if it is disabled
    homePageObj.getEnterprenuer().should("be.disabled");
    homePageObj.getShopTab().click();
    cy.wait(2000);
    //How to iterate through array in JS
    this.testData.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    productPageObj.getCheckoutButton().click();
  });
  // it("Cypress custom commands", () => {
  //   cy.visit("https://rahulshettyacademy.com/angularpractice/");
  //   cy.get(":nth-child(2) > .nav-link").click();
  //   cy.wait(2000);
  //   //How to iterate through array in JS
  //   this.testData.productName.forEach((element) => {
  //     cy.selectProduct(element);
  //   });
  // });
});
