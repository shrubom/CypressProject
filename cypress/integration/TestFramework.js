/// <reference types = 'cypress'/>
import HomePage from "../integration/PageObjects/HomePage";
import ProductPage from "../integration/PageObjects/ProductPage";
import CheckoutPage from "../integration/PageObjects/CheckoutPage";

describe("Cypress Test Framework Test Suite", function () {
  before("Opening the url", function () {
    cy.fixture("testData.json").then(function (data) {
      this.testData = data;
    });
  });
  it("Mocha Test Framework", function () {
    const homePageObj = new HomePage();
    const productPageObj = new ProductPage();
    const checkoutpageObj = new CheckoutPage();
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
    checkoutpageObj.finalCheckoutButton().click();
    checkoutpageObj.getCountry().type("Estonia");
    cy.wait(9000);
    cy.get(".suggestions > ul > li > a").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get(".ng-untouched > .btn").contains("Purchase").click();
    cy.get(".alert").should(
      "have.text",
      "\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        "
    );
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
