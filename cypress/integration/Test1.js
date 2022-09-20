/// <reference types = 'cypress' />
describe("My first test suite", function () {
  it("My first test case", function () {
    console.log("Open the URL");
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get("input.search-keyword").type("ca");
    //To validate how many objects are displayed and assert it using chai framework
    cy.wait(2000);
    // cy.get(".product:visible").should("have.length", 4);
    //Parent child chaining.
    cy.get(".products").find(".product").should("have.length", 4);
    //Now clicking on add to cart button on the second product
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    //How to dynamically click on products based on their name without providing the index of the item]
    //Now the requirement is when it is capsicum only then add to cart
    cy.get(".products")
      .find(".product")
      .each(($element1, index, $list) => {
        //In here you are just grabbing the text of the product in the element list
        //you need to use wrap when you are trying to click on a button that is a collection/list
        let vegRequired = $element1.find("h4.product-name").text(); //Grabs the text on that element
        if (vegRequired.includes("Cashews")) {
          cy.wrap($element1)
            .find("button[type=button]")
            .contains("ADD TO CART")
            .click();
        }
      });
    // let logo = cy.get("div.brand.greenlogo");
    // cy.log(logo.text());
    //Line 29 and 30 will not work.
    cy.get("div.brand.greenlogo").then(function (logoElement) {
      cy.log(logoElement.text());
    });
  });
});
