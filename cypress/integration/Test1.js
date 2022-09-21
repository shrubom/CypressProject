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
    //Instead of using the element multiple times, We use this technique (aliasing)
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
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
    //Assertions
    cy.get("div.brand.greenlogo").should("have.text", "GREENKART");
    cy.get("div.brand.greenlogo").then(function (logoElement) {
      cy.log(logoElement.text());
    });
  });

  it("My second test case", function () {
    cy.log("clicking on the cart button and hitting proceed button");
    cy.get(".cart-icon > img").click();
    cy.get(
      "div.container div.container div.cart div.cart-preview.active:nth-child(6) div.action-block:nth-child(2) > button:nth-child(1)"
    ).click();
    cy.get(".promoCode").type("1AK23");
    cy.get(".promoBtn").click();
    cy.wait(2000);
    cy.get(
      "div.container div.products-wrapper:nth-child(2) div.products div:nth-child(4) > button:nth-child(14)"
    ).click();
  });

  it("My third test case", function () {});
});
