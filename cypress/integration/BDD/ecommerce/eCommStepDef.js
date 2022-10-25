import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePageObj = new HomePage();
const productPageObj = new ProductPage();
const checkoutpageObj = new CheckoutPage();

Given("Open Ecommerce page", () => {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("Add items to Cart", () => {
  homePageObj.getShopTab().click();
  cy.wait(2000);
  //How to iterate through array in JS
  this.testData.productName.forEach((element) => {
    cy.selectProduct(element);
  });
  productPageObj.getCheckoutButton().click();
});

And("Validate the prices of the total price", () => {});
