import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../integration/PageObjects/HomePage";
import ProductPage from "../../../integration/PageObjects/ProductPage";
import CheckoutPage from "../../../integration/PageObjects/CheckoutPage";

const homePageObj = new HomePage();
const productPageObj = new ProductPage();
const checkoutpageObj = new CheckoutPage();

Given("Open Ecommerce page", function () {
  cy.visit("https://rahulshettyacademy.com/angularpractice/");
});

When("Add items to Cart", function () {
  homePageObj.getShopTab().click();
  cy.wait(2000);
  //How to iterate through array in JS
  this.testData.productName.forEach((element) => {
    cy.selectProduct(element);
  });
  productPageObj.getCheckoutButton().click();
});

And("Validate the prices of the total price", function () {
  cy.get("tr td:nth-child(4) strong")
    .each(($ele, index, $list) => {
      cy.log($ele.text());
      const actualText = $ele.text();
      let resultText = actualText.split(" ");
      resultText = Number(resultText[1].trim());
      sum = sum + resultText;
    })
    .then(function () {
      cy.log(sum);
    });

  cy.get("h3 strong").then(function (el) {
    let amount = el.text();
    let res = amount.split(" ");
    let total = Number(res[1].trim());
    expect(sum).to.equal(total);
  });
});

Then("select the country sub,it and verify Thankyou.", function () {
  checkoutpageObj.finalCheckoutButton().click();
  checkoutpageObj.getCountry().type("Estonia");
  cy.wait(9000);
  cy.get(".suggestions > ul > li > a").click();
  cy.get("#checkbox2").click({ force: true });
  cy.get(".ng-untouched > .btn").contains("Purchase").click();
  cy.get(".alert").then(function (ele) {
    expect(ele.text().includes("Success")).to.be.true;
  });
});

When("Add personal details", function (dataTable) {
  homePageObj.getEditBox().type(dataTable.rawTable[1][0]);
  homePageObj.getGender().select(dataTable.rawTable[1][1]);

  //validation of the value entered in the name is the same in data binding example field
  homePageObj.getTwoWayDataBinding().should("have.value", this.testData.name);
  //Verify if the property minlength property is 2
  homePageObj.getEditBox().should("have.attr", "minlength", "2");
  //Validation of a radio button if it is disabled
  homePageObj.getEnterprenuer().should("be.disabled");
  homePageObj.getShopTab().click();
});
